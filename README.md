# CopyCat Clipboard

When you're reading an article and you want to copy multiple sentences to quote in your paper, it can be bothersome
to have to navigate back and forth while you copy one section at a time. CopyCat Clipboard is an extension that
tries to solve that by allowing users to copy text to a local place first in any order, and then copy the new text
with one click. 

# Languages

We used JavaScript and HTML/CSS to build this extension for Google Chrome. The icon was made with Photoshop.

# Screenshots

<p align="center"><img src="https://i.imgur.com/r4kBVBX.png" alt="Screenshot2"
	title="Screenshot" width="233" height="300" /></p> 
	
<p align="center"><img src="https://i.imgur.com/mluqI6g.png" alt="Screenshot1"
	title="Screenshot" width="233" height="300" /></p> 

# What We Learned

The hardest part of building this was "saving" data when the user closes the extension window, and recalling it when
the user opens the extension again. It would work on one webpage, but when we tried using different tabs, the memory
would reset each time. We figured it out by learning about Google Chrome's built-in features. 

# Next Steps

A really important feature to add is "citations"! When a user copies text from a webpage, CopyCat should save the URL 
of the website, and when a user pastes the text, CopyCat should automatically add the URL source after it. This can
help prevent plagiarism and encourage good citing practices for academic honesty. 

One of the ambitions we had for this extension was that it would detect when users copied text to their clipboard. 
However, due to time constraints, we weren't able to figure it out. If we revisit this project in the future, 
automatic-copying would make this extension much more useful.

# Results

This project won 1st place at the MLH Local Hack Day event at Sheridan College!
