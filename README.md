# CopyCat Clipboard

When you're reading an article and you want to copy multiple sentences to quote in your paper, it can be bothersome
to have to navigate back and forth while you copy one section at a time. CopyCat Clipboard is an extension that
tries to solve that by allowing users to copy text to a local place first in any order, and then copy the new text
with one click. 

Devpost submission: https://devpost.com/software/copycat-clipboard-rugmve

# Languages

We used JavaScript and HTML/CSS to build this extension for Google Chrome. The icon was made with Photoshop.

# Screenshots

<p align="center"><img src="https://lh3.googleusercontent.com/v0h3_2RCD6XLQ-mONX2UkUNZuf8qqspY1TOeYz9taHlrV-nqVMgprlDmLByFdml4RD5NJlSBQJa1N8t1_qC9c7R0UGiMQjoHB9ksVwnU6vibQ4frul-AiI1NEdMD_GsoA_nphGE0rTE0LoyNtoXY6cEOpIEAI-jf94GrNPxzImK5JlaF_BWDVwLt5O_qQTJ0RVTNGe7OAbm4alHVFzM8b_FLpWvSUiW_mFkPjwLuEuf7cfxUxCdvYhliFFk5pM96uFwB0PwwSzmVgYcAtvHYGFwUOCKeBrRE90bq1aDaSuKJD1-CvFZ9tfSpxHsZn1yT7duBS3jxOXq9XPA9D4Gg9qXnpM1-IE-QiwqG6AJyHUz8cX61-wy91R7Wvt3x0z0iW9fwlofcBbqcBAABrTrc8_hHfhLN2XgpWHB4ElyqO4zFy3OaZ18N-2tzsxmr8i0XtTQ8zGpRDGnXcbZ3UQs3ny6NT-xxEtGfs3ncoEYfVJ_spO8tGar1COvXkjv2gp7LTVOiBHDbLyQhZBlRNgyr8AOCedXWi3Xoj1ewJYmqCT2lkBmN59fHkODbvnBcxFLC777h1TD3OTG-t1opEEgWqw9ENRbcXeVCCNfGLtZ17cl1cB29OLdLMuYRuNh3nbQTO-xNS_SDdOlXAd1ezvqNDFF0qLMAYeOD7oF-QOZbIVUDm2EEih70lvbZbdD2OiIqTUP7szaUYYQj7pHXG3POoHKzUuUzL0McKtLzCirwplxQEJc3=w638-h856-no" alt="Screenshot2"
	title="Screenshot" width="233" height="300" /></p> 
	
<p align="center"><img src="https://lh3.googleusercontent.com/MdJGD0BZPBg2vL0-5mEba8-8zbBttjkNyfAp0pjGqJkjELunvAdQTamKaxXa3mxBDjy7-whK6L7PSQ8A77b4DRWnjReBbQk7DUBrcbljGijXIvtU5bQhvKT1uW7L0fN0waKBZEI2LYVANbrQY5YxlOjdsIe2njPhBMb-858WHbseswI1jkjoLoqbEqKP01Imwz4Cr8lCOX-h8DvZL_BzoSX5J08hc9BaA5YupS-YlqS_tlGfgKST6WrzXwOClITfknKwf3yVh9ymuZAR4MZlEhVGbO5pXszdMT-9ygHIZh3wt6anwvuF2qdZ3MHmRd3mHEfW8Uju38aaneJGh76zCxrqoJOVSDfuaKl58eSvgSuNrsmraF5-31w2rB41mFA4H1pFGLjtz1GjFDkSbOB8Z434s6qaA_Yo-K-h1R3nNp4LXxY6c59y0CFY9azijJRTKx5WDsDcP4SEAoQWnnhGxMzX_vaUjv1tahHwgIbOIwDTQP0AUb9zEbA20sAlEK3q521PVJFK6qjxJGB8mRoy6KITUw9K3PIS8vgT-OYrCtlzwWNfGYtm9j3xUFFWmLF0aaosyiVfhNZf2K3aHFYH3lc7kUHjzk654wtDg14-qDOUFgIdEYkU74zIRCETrV_VWEbVIfieL3Rp05xSRMriXxeTX_QAWNEa3jq2WdvlHlN8AQMX68UufudhIwurOEJVKx7XSuR_-mD2iW7KMvHuZ_N7O8uJUDrVL7eabKO2mNIGw5aY=w644-h862-no" alt="Screenshot1"
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
