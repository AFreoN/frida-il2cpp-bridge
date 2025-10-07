#!/usr/bin/env python3
"""
extract_traces.py

Usage:
    python extract_traces.py -i input.txt -o output.txt

This script finds occurrences of:
    <string1>$$<string2>[+offset?]
and emits each unique (string1, string2) pair only once as:
    traceMethod("Root", "<string1>", "<string2>");

If a string contains an underscore (_), everything from the underscore onward is stripped.
"""

import re
import argparse
from typing import List, Tuple, Iterable, Set

# Capture string1 and string2, ignore +offset after string2
_PATTERN = re.compile(r'([A-Za-z0-9_]+)\$\$([A-Za-z0-9_]+)(?:\+[A-Fa-f0-9]+)?')


def trim_underscore(s: str) -> str:
    """Return substring before first underscore, or the full string if no underscore."""
    return s.split('_', 1)[0]


def extract_pairs_from_line(line: str) -> List[Tuple[str, str]]:
    """Return list of (string1, string2) pairs found in the line, trimmed before underscores."""
    pairs = _PATTERN.findall(line)
    return [(trim_underscore(a), trim_underscore(b)) for a, b in pairs]


def format_trace(root: str, s1: str, s2: str) -> str:
    return f'traceMethod("{root}", "{s1}", "{s2}");'


def process_lines(lines: Iterable[str], root: str = "Root") -> List[str]:
    """
    Process lines and return formatted trace strings.
    Each (s1, s2) pair is emitted once only, preserving first-seen order.
    """
    emitted: Set[Tuple[str, str]] = set()
    out: List[str] = []
    for line in lines:
        for s1, s2 in extract_pairs_from_line(line):
            key = (s1, s2)
            if key in emitted:
                continue
            emitted.add(key)
            out.append(format_trace(root, s1, s2))
    return out


def read_file(path: str) -> List[str]:
    with open(path, "r", encoding="utf-8") as f:
        return f.readlines()


def write_file(path: str, lines: Iterable[str]) -> None:
    with open(path, "w", encoding="utf-8") as f:
        for line in lines:
            f.write(line.rstrip() + "\n")


def parse_args():
    p = argparse.ArgumentParser(description="Extract unique $$ pairs and emit traceMethod lines.")
    p.add_argument("-i", "--input", required=True, help="Input .txt file path")
    p.add_argument("-o", "--output", required=True, help="Output .txt file path")
    p.add_argument("--root", default="Root", help='Root name used in traceMethod, default "Root"')
    return p.parse_args()


def main():
    args = parse_args()
    lines = read_file(args.input)
    traces = process_lines(lines, root=args.root)
    write_file(args.output, traces)
    print(f"Wrote {len(traces)} unique pairs to {args.output}")


if __name__ == "__main__":
    main()
