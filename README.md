Tab Counteroo
=============

Shows and logs a count of currently opened tabs.

The log is simply an IndexedDB file though, so it is a bit inconvenient to
access.  Sorry, this was the only way I found to force Chrome to sync extension
data to disk.  This is kludgy, but allows me to get that data into other
programs, which is the main point of this extension.

The src/tabsOpen.py script can be used to extract this data from a command line.

The original "Chrome Tab Counter" version is published in the Chrome Web Store:
https://chrome.google.com/webstore/detail/chrome-tab-counter/fhnegjjodccfaliddboelcleikbmapik



Copyright (c) 2011-2014 Miroslav Solanka, 2018 Selene Scriven

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
