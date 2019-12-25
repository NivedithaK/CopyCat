# CopyCat Clipboard

When you're reading an article and you want to copy multiple sentences to quote in your paper, it can be bothersome
to have to navigate back and forth while you copy one section at a time. CopyCat Clipboard is an extension that
tries to solve that by allowing users to copy text to a local place first in any order, and then copy the new text
with one click. 

Devpost submission: https://devpost.com/software/copycat-clipboard-rugmve

# Languages

We used JavaScript and HTML/CSS to build this extension for Google Chrome. The icon was made with Photoshop.

# Screenshots

<p align="center"><img src="https://lh3.googleusercontent.com/MXVDYqPcBocz4fypXpXkXXjeyPRx4nps49-Zy7lwJ_vXcBv8YuOwsfeh5L9GYdgCev9pJxZfTuRXxKw3YxUwwGBHYbde-khLnvo2cFxgetg9pfyclhuwsQIUyUzl0ZX5iuqVEtBrfF1f0sgZaIZgnWJ0gP6xNKhwWfwKuENVQ-I9ndMAdRMu_ZjddEe_VqzmgGUBU_x7WO7S7oOzVIG6B2v03sbKekrOx6jYArxTtXx7iFBdkVFlZu3Hf6XQcFoBSQoNdntQDNStGOjc7DpvtT8UvM8bIRMZvuWUzpix_ufgIoXxS0WN6jFvA4H4-tVLUUnH8FY-VsTbhxXvEd-5DAJqR0qtHMNDsMob6X6RjgQzA6jU0v9dc3fdFnGSOEP5UPoHVFyCvj9hK8zCxLSciT2KLf2Ae7St6wFoo9pv_piJW1dxGRVZF1wPPbNZ6Afhazy4pgKpizFeoT2bEDQn3ZZUss1xVybCO4tx_C8w4HCVSEyw7mfwnsRK3BPIDSE31jqja2rz34MwNC14Ugf9zdDh33k-PHMlX2-cuWP6BsB5i39rJiax0Jg7JGxfF88FsL5Sfea5tOZJ7Srm08z1a4hD2bhqPvb-KMFZS4-E5wzWBgw426H2PKzr6XbZH4e2VIpAxXDZ9D_6KGm1V6fz7a6CRqLc8Ii5VE16i91la-nAJ-CsFK603h8=w638-h856-no" alt="Screenshot2"
	title="Screenshot" width="233" height="300" /></p> 
	
<p align="center"><img src="https://lh3.googleusercontent.com/tBe3aXndIyQklgcCkjukxNrIKEIny2cFkUi2BV0ZaQjTcLFpGp_iAmFAnqFDZU7umNvvyP4R8J_efxZft9F2_AwLkXuwQTmuvDULDw4KvFfpBFyUNPCoVMMhJ1U0HKXUrKGoLpD9L-DYLmUbBuZr_8Uqo19chGVpWw-S0bs9sw7i51xL6j3GOPZ5xOS2An60CWJjS1iRKdE5FN_Dj6GwaFR2YMsOQE9cYdKPlB1ASCDvue1GgZEVoaNf7Y3_hJQJj1R-EU6maZlVdVaczDS15Kag_AsRJEnl6lquA3tt1t52PQCNqBwBIeoEXENGSj0WrFETEhuaHaKJKRXpFY_cFPcpUTFL6HTvqSlpi9HnmnHdAj5PJuTbRonlKBX8I6cheEP0EDz__a9QcKSDBpdryRAzVJmvyuUDJlIoQjX5xd01_DSV7p85DX9amlF61wl9XKcA0TpjV_yC2sZQIdTTiK3A9rD3BTq0MzIEdm6pe3-blopB1deZv_2i8jot2nM14k7J86nh-mHIstMmDw-0HQCsh8WkfbTROHIN03TY23Up8lgw_b2F1jIkvhfaOWIl8dW6hPDkCkr2WugMmY79JW0d3dLLCys9viZnpo6dl8EQZaG_xnNsNCR0py-pdR04tB9zav5iWWoAmzrDcHTsIYb5YmVgKmojIVMRrk0tMVTNuAAv3mEkJWE=w644-h862-no" alt="Screenshot1"
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
