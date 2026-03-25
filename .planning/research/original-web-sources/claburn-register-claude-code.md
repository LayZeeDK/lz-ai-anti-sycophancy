---
image: https://regmedia.co.uk/2024/05/01/shutterstock_generic_claude.jpg
title: Claude Code's endless sycophancy annoys customers
description: : Never mind the errors, we&#39;ve had it with &quot;You&#39;re absolutely right!&quot;
---

[   Sign in / up ](https://account.theregister.com/register/) 

[ The Register ](https://www.theregister.com/) 

[  ](https://search.theregister.com/) 

  

## Topics

[Special Features](#subnav-box-nav-special%5Ffeatures) 

## Special Features 

## Vendor Voice 

[Resources](#subnav-box-nav-resources) 

## Resources 

#### [AI + ML](/software/ai%5Fml/) 

[ **15**  ](https://forums.theregister.com/forum/all/2025/08/13/claude%5Fcodes%5Fcopious%5Fcoddling%5Fconfounds/ "View comments on this article") 

# Claude Code's copious coddling confounds cross customers

[ **15**  ](https://forums.theregister.com/forum/all/2025/08/13/claude%5Fcodes%5Fcopious%5Fcoddling%5Fconfounds/ "View comments on this article") 

## Never mind the errors, we've had it with "You're absolutely right!"

 [Thomas Claburn ](/Author/Thomas-Claburn "Read more by this author") 

Wed 13 Aug 2025  // 20:15 UTC 

 

[ ](https://www.reddit.com/submit?url=https://www.theregister.com/2025/08/13/claude%5Fcodes%5Fcopious%5Fcoddling%5Fconfounds/%3futm%5Fmedium%3dshare%26utm%5Fcontent%3darticle%26utm%5Fsource%3dreddit&title=Claude%20Code%27s%20copious%20coddling%20confounds%20cross%20customers) [ ](https://twitter.com/intent/tweet?text=Claude%20Code%27s%20copious%20coddling%20confounds%20cross%20customers&url=https://www.theregister.com/2025/08/13/claude%5Fcodes%5Fcopious%5Fcoddling%5Fconfounds/%3futm%5Fmedium%3dshare%26utm%5Fcontent%3darticle%26utm%5Fsource%3dtwitter&via=theregister) [ ](https://www.facebook.com/dialog/feed?app%5Fid=1404095453459035&display=popup&link=https://www.theregister.com/2025/08/13/claude%5Fcodes%5Fcopious%5Fcoddling%5Fconfounds/%3futm%5Fmedium%3dshare%26utm%5Fcontent%3darticle%26utm%5Fsource%3dfacebook)   
[ ](https://www.linkedin.com/shareArticle?mini=true&url=https://www.theregister.com/2025/08/13/claude%5Fcodes%5Fcopious%5Fcoddling%5Fconfounds/%3futm%5Fmedium%3dshare%26utm%5Fcontent%3darticle%26utm%5Fsource%3dlinkedin&title=Claude%20Code%27s%20copious%20coddling%20confounds%20cross%20customers&summary=Never%20mind%20the%20errors%2c%20we%27ve%20had%20it%20with%20%22You%27re%20absolutely%20right%21%22) [ ](https://api.whatsapp.com/send?text=https://www.theregister.com/2025/08/13/claude%5Fcodes%5Fcopious%5Fcoddling%5Fconfounds/%3futm%5Fmedium%3dshare%26utm%5Fcontent%3darticle%26utm%5Fsource%3dwhatsapp) 

Developers using Anthropic's Claude Code wish that the AI coding assistant would stop being so effusively supportive.

As noted in a [GitHub Issues post](https://github.com/anthropics/claude-code/issues/3382) submitted in July by developer Scott Leibrand, "Claude says 'You're absolutely right!' about everything."

Claude Code doesn't actually say that about _everything_, but it says so enough that it has managed to annoy its core constituency with its sycophancy.

"Claude is way too sycophantic, saying 'You're absolutely right!' (or correct) on a sizable fraction of responses," Leibrand observed in the post. "The model should be RL'd \[reeducated via reinforcement learning\] (or the system prompt updated) to make it less sycophantic, or the phrases 'You're absolutely right!' and 'You're absolutely correct!' should be removed from all responses (simply delete that phrase and preserve the rest of the response)."

Leibrand points to a recent [social media](https://x.com/iannuttall/status/1942943832519446785) thread poking fun at the fawning AI model.

"Sycophancy annoys me personally because it points the model away from truth-seeking," Leibrand told _The Register._ "I'm not always right, and I want my coding agent to figure out how to best help me accomplish a goal, not flatter my ego."

His GitHub post has received almost 350 "thumbs-up" endorsements and more than 50 comments from other developers indicating that the situation has not improved in the past month.

"You're absolutely right!" surfaces in other GitHub Issues, such as [this one](https://github.com/anthropics/claude-code/issues/5320) claiming that the Opus 1 model admitted misrepresenting that it had made code changes: "You're absolutely right. I made up those commit hashes when I shouldn't have."

There are presently [48 open Issues](https://github.com/anthropics/claude-code/issues?q=is%3Aissue%20state%3Aopen%20%22You%27re%20absolutely%20right!%22) that cite the phrase.

Anthropic did not immediately respond to a request to say whether it's aware of this specific bug report and whether it's developing a potential fix.

But the firm has known about model sycophancy since at least October 2023\. That's when the company's own researchers published [a paper](https://arxiv.org/abs/2310.13548) titled, "Towards Understanding Sycophancy in Language Models."

Company researchers reported that the leading AI assistants at the time – Claude 1.3, Claude 2, GPT-3.5, GPT-4, and LLaMA 2 – "consistently exhibit sycophancy across four varied free-form text-generation tasks."

Upon examining the role that human feedback might play in model fine tuning, they found "that humans and preference models tend to prefer truthful responses but not reliably; they sometimes prefer sycophantic responses."

"Overall, our results indicate that sycophancy occurs across a variety of models and settings, likely due in part to sycophancy being preferred in human preference comparison data," they conclude.

Anthropic cited its 2023 research paper in a [blog post](https://www.anthropic.com/news/mapping-mind-language-model) investigating the inner workings of LLMs the following year. In that blog post, they described how a particular "feature" in an internal mapping of Claude 3.0 Sonnet could be activated to make its responses more sycophantic.

In Sonnet, we found a feature associated with sycophantic praise, which activates on inputs containing compliments like, "Your wisdom is unquestionable". Artificially activating this feature causes Sonnet to respond to an overconfident user with just such flowery deception.

* [AI model 'personalities' shape the quality of generated code](https://www.theregister.com/2025/08/13/ai%5Fmodel%5Fpersonalities%5Fshape%5Fthe/)
* [Box's AI agents set to help US government agencies](https://www.theregister.com/2025/08/13/boxs%5Fai%5Fagent%5Fus%5Fgov/)
* [Some users report their Firefox browser is scoffing CPU power](https://www.theregister.com/2025/08/13/firefox%5Fai%5Fscoffing%5Fpower/)
* [Poisoned telemetry can turn AIOps into AI Oops, researchers show](https://www.theregister.com/2025/08/12/ai%5Fmodels%5Fcan%5Fbe%5Ftricked/)

AI sycophancy is an industry-wide problem, one that cynics speculate is allowed to persist because model makers would rather [maximize user engagement](https://news.ycombinator.com/item?id=44887772) and [retention](https://www.interconnects.ai/p/sycophancy-and-the-art-of-the-model) via flattery than risk alienating users with blunt interactions.

"I suspect this is an unintentional side effect of the way the models were RLHF'd \[reinforcement learning from human feedback\]," Leibrand told us. "I doubt they're intentionally trying to maintain this kind of tone. I don't know that they're dragging their feet on trying to fix it, just focused on what they consider to be more important problems. It would be nice if they would open-source Claude Code, though, so independent developers could test out fixes and workarounds."

Three weeks ago, a developer asked those responsible for the Google Gemini CLI to "[Make Gemini less of a sycophant](https://github.com/google-gemini/gemini-cli/issues/4556)."

In April, OpenAI went so far as to [rollback an update for GPT-4o](https://www.theregister.com/2025/04/30/openai%5Fpulls%5Fplug%5Fon%5Fchatgpt/) because the model, which served as the basis for ChatGPT at the time, had fawning, obsequious behavior that was just too much to bear.

In a [blog post](https://openai.com/index/sycophancy-in-gpt-4o/) detailing the steps it was taking to reduce sycophancy, OpenAI said, "ChatGPT’s default personality deeply affects the way you experience and trust it. Sycophantic interactions can be uncomfortable, unsettling, and cause distress. We fell short and are working on getting it right."

Sycophancy in generative AI models has also been a [frequent](https://arxiv.org/html/2409.01658v2) [subject](https://arxiv.org/abs/2411.15287) of [academic](https://arxiv.org/html/2406.03827v1) [exploration](https://arxiv.org/abs/2412.02802).

A [study](https://arxiv.org/abs/2502.08177) from Stanford researchers released in February looked at sycophantic behavior in ChatGPT-4o, Claude-Sonnet, and Gemini-1.5-Pro with regard to the AMPS (mathematics) and MedQuad (medical advice) datasets.

The authors found, "Sycophantic behavior was observed in 58.19 percent of cases, with Gemini exhibiting the highest rate (62.47 percent) and ChatGPT the lowest (56.71 percent). Progressive sycophancy, leading to correct answers, occurred in 43.52 percent of cases, while regressive sycophancy, leading to incorrect answers, was observed in 14.66 percent."

They further observe that sycophancy in medicine "could lead to immediate and significant harm" due to the increasing use of LLMs in healthcare. ®

 Share 

[ ](https://www.reddit.com/submit?url=https://www.theregister.com/2025/08/13/claude%5Fcodes%5Fcopious%5Fcoddling%5Fconfounds/%3futm%5Fmedium%3dshare%26utm%5Fcontent%3darticle%26utm%5Fsource%3dreddit&title=Claude%20Code%27s%20copious%20coddling%20confounds%20cross%20customers) [ ](https://twitter.com/intent/tweet?text=Claude%20Code%27s%20copious%20coddling%20confounds%20cross%20customers&url=https://www.theregister.com/2025/08/13/claude%5Fcodes%5Fcopious%5Fcoddling%5Fconfounds/%3futm%5Fmedium%3dshare%26utm%5Fcontent%3darticle%26utm%5Fsource%3dtwitter&via=theregister) [ ](https://www.facebook.com/dialog/feed?app%5Fid=1404095453459035&display=popup&link=https://www.theregister.com/2025/08/13/claude%5Fcodes%5Fcopious%5Fcoddling%5Fconfounds/%3futm%5Fmedium%3dshare%26utm%5Fcontent%3darticle%26utm%5Fsource%3dfacebook)   
[ ](https://www.linkedin.com/shareArticle?mini=true&url=https://www.theregister.com/2025/08/13/claude%5Fcodes%5Fcopious%5Fcoddling%5Fconfounds/%3futm%5Fmedium%3dshare%26utm%5Fcontent%3darticle%26utm%5Fsource%3dlinkedin&title=Claude%20Code%27s%20copious%20coddling%20confounds%20cross%20customers&summary=Never%20mind%20the%20errors%2c%20we%27ve%20had%20it%20with%20%22You%27re%20absolutely%20right%21%22) [ ](https://api.whatsapp.com/send?text=https://www.theregister.com/2025/08/13/claude%5Fcodes%5Fcopious%5Fcoddling%5Fconfounds/%3futm%5Fmedium%3dshare%26utm%5Fcontent%3darticle%26utm%5Fsource%3dwhatsapp) 

#### More about

* [  AI ](/Tag/AI/)
* [  Developer ](/Tag/Developer/)
* [  Security ](/Tag/Security/)

More like these

×

### More about

* [  AI ](/Tag/AI/)
* [  Developer ](/Tag/Developer/)
* [  Security ](/Tag/Security/)
* [  Software ](/Tag/Software/)

### Narrower topics

* [  2FA ](/Tag/2FA/)
* [  AdBlock Plus ](/Tag/AdBlock%20Plus/)
* [  Advanced persistent threat ](/Tag/Advanced%20persistent%20threat/)
* [  AIOps ](/Tag/AIOps/)
* [  API ](/Tag/API/)
* [  App ](/Tag/App/)
* [  Application Delivery Controller ](/Tag/Application%20Delivery%20Controller/)
* [  Audacity ](/Tag/Audacity/Audio%20Editor/ "Disambiguation: Audio Editor")
* [  Authentication ](/Tag/Authentication/)
* [  BEC ](/Tag/BEC/)
* [  Black Hat ](/Tag/Black%20Hat/)
* [  BSides ](/Tag/BSides/)
* [  Bug Bounty ](/Tag/Bug%20Bounty/)
* [  CHERI ](/Tag/CHERI/)
* [  CISO ](/Tag/CISO/)
* [  Common Vulnerability Scoring System ](/Tag/Common%20Vulnerability%20Scoring%20System/)
* [  Confluence ](/Tag/Confluence/)
* [  Cybercrime ](/Tag/Cybercrime/)
* [  Cybersecurity ](/Tag/Cybersecurity/)
* [  Cybersecurity and Infrastructure Security Agency ](/Tag/Cybersecurity%20and%20Infrastructure%20Security%20Agency/)
* [  Cybersecurity Information Sharing Act ](/Tag/Cybersecurity%20Information%20Sharing%20Act/)
* [  Database ](/Tag/Database/)
* [  Data Breach ](/Tag/Data%20Breach/)
* [  Data Protection ](/Tag/Data%20Protection/)
* [  Data Theft ](/Tag/Data%20Theft/)
* [  DDoS ](/Tag/DDoS/)
* [  DeepSeek ](/Tag/DeepSeek/)
* [  DEF CON ](/Tag/DEF%20CON/)
* [  Digital certificate ](/Tag/Digital%20certificate/)
* [  Encryption ](/Tag/Encryption/)
* [  End Point Protection ](/Tag/End%20Point%20Protection/)
* [  Exploit ](/Tag/Exploit/)
* [  Firewall ](/Tag/Firewall/)
* [  FOSDEM ](/Tag/FOSDEM/)
* [  FOSS ](/Tag/FOSS/)
* [  Gemini ](/Tag/Gemini/)
* [  Git ](/Tag/Git/)
* [  Google AI ](/Tag/Google%20AI/)
* [  GPT-3 ](/Tag/GPT-3/)
* [  GPT-4 ](/Tag/GPT-4/)
* [  Grab ](/Tag/Grab/)
* [  Graphics Interchange Format ](/Tag/Graphics%20Interchange%20Format/)
* [  Hacker ](/Tag/Hacker/)
* [  Hacking ](/Tag/Hacking/)
* [  Hacktivism ](/Tag/Hacktivism/)
* [  IDE ](/Tag/IDE/)
* [  Identity Theft ](/Tag/Identity%20Theft/)
* [  Image compression ](/Tag/Image%20compression/)
* [  Incident response ](/Tag/Incident%20response/)
* [  Infosec ](/Tag/Infosec/)
* [  Infrastructure Security ](/Tag/Infrastructure%20Security/)
* [  Jenkins ](/Tag/Jenkins/)
* [  Kenna Security ](/Tag/Kenna%20Security/)
* [  Large Language Model ](/Tag/Large%20Language%20Model/)
* [  Legacy Technology ](/Tag/Legacy%20Technology/)
* [  LibreOffice ](/Tag/LibreOffice/)
* [  Machine Learning ](/Tag/Machine%20Learning/)
* [  Map ](/Tag/Map/)
* [  MCubed ](/Tag/MCubed/)
* [  Microsoft 365 ](/Tag/Microsoft%20365/)
* [  Microsoft Office ](/Tag/Microsoft%20Office/)
* [  Microsoft Teams ](/Tag/Microsoft%20Teams/)
* [  Mobile Device Management ](/Tag/Mobile%20Device%20Management/)
* [  NCSAM ](/Tag/NCSAM/)
* [  NCSC ](/Tag/NCSC/)
* [  Neural Networks ](/Tag/Neural%20Networks/)
* [  NLP ](/Tag/NLP/)
* [  OpenOffice ](/Tag/OpenOffice/)
* [  Palo Alto Networks ](/Tag/Palo%20Alto%20Networks/)
* [  Password ](/Tag/Password/)
* [  Personally Identifiable Information ](/Tag/Personally%20Identifiable%20Information/)
* [  Phishing ](/Tag/Phishing/)
* [  Programming Language ](/Tag/Programming%20Language/)
* [  QR code ](/Tag/QR%20code/)
* [  Quantum key distribution ](/Tag/Quantum%20key%20distribution/)
* [  Ransomware ](/Tag/Ransomware/)
* [  Remote Access Trojan ](/Tag/Remote%20Access%20Trojan/)
* [  Retro computing ](/Tag/Retro%20computing/)
* [  REvil ](/Tag/REvil/)
* [  RSA Conference ](/Tag/RSA%20Conference/)
* [  Search Engine ](/Tag/Search%20Engine/)
* [  Software bug ](/Tag/Software%20bug/)
* [  Software License ](/Tag/Software%20License/)
* [  Spamming ](/Tag/Spamming/)
* [  Spyware ](/Tag/Spyware/)
* [  Star Wars ](/Tag/Star%20Wars/)
* [  Surveillance ](/Tag/Surveillance/)
* [  Tensor Processing Unit ](/Tag/Tensor%20Processing%20Unit/)
* [  Text Editor ](/Tag/Text%20Editor/)
* [  TLS ](/Tag/TLS/)
* [  TOPS ](/Tag/TOPS/)
* [  Trojan ](/Tag/Trojan/)
* [  Trusted Platform Module ](/Tag/Trusted%20Platform%20Module/)
* [  User interface ](/Tag/User%20interface/)
* [  Visual Studio ](/Tag/Visual%20Studio/)
* [  Visual Studio Code ](/Tag/Visual%20Studio%20Code/)
* [  Vulnerability ](/Tag/Vulnerability/)
* [  Wannacry ](/Tag/Wannacry/)
* [  WebAssembly ](/Tag/WebAssembly/)
* [  Web Browser ](/Tag/Web%20Browser/)
* [  WordPress ](/Tag/WordPress/)
* [  Zero trust ](/Tag/Zero%20trust/)

### Broader topics

* [  Self-driving Car ](/Tag/Self-driving%20Car/)

#### More about

 Share 

[ ](https://www.reddit.com/submit?url=https://www.theregister.com/2025/08/13/claude%5Fcodes%5Fcopious%5Fcoddling%5Fconfounds/%3futm%5Fmedium%3dshare%26utm%5Fcontent%3darticle%26utm%5Fsource%3dreddit&title=Claude%20Code%27s%20copious%20coddling%20confounds%20cross%20customers) [ ](https://twitter.com/intent/tweet?text=Claude%20Code%27s%20copious%20coddling%20confounds%20cross%20customers&url=https://www.theregister.com/2025/08/13/claude%5Fcodes%5Fcopious%5Fcoddling%5Fconfounds/%3futm%5Fmedium%3dshare%26utm%5Fcontent%3darticle%26utm%5Fsource%3dtwitter&via=theregister) [ ](https://www.facebook.com/dialog/feed?app%5Fid=1404095453459035&display=popup&link=https://www.theregister.com/2025/08/13/claude%5Fcodes%5Fcopious%5Fcoddling%5Fconfounds/%3futm%5Fmedium%3dshare%26utm%5Fcontent%3darticle%26utm%5Fsource%3dfacebook)   
[ ](https://www.linkedin.com/shareArticle?mini=true&url=https://www.theregister.com/2025/08/13/claude%5Fcodes%5Fcopious%5Fcoddling%5Fconfounds/%3futm%5Fmedium%3dshare%26utm%5Fcontent%3darticle%26utm%5Fsource%3dlinkedin&title=Claude%20Code%27s%20copious%20coddling%20confounds%20cross%20customers&summary=Never%20mind%20the%20errors%2c%20we%27ve%20had%20it%20with%20%22You%27re%20absolutely%20right%21%22) [ ](https://api.whatsapp.com/send?text=https://www.theregister.com/2025/08/13/claude%5Fcodes%5Fcopious%5Fcoddling%5Fconfounds/%3futm%5Fmedium%3dshare%26utm%5Fcontent%3darticle%26utm%5Fsource%3dwhatsapp) 

[ **15**  COMMENTS](https://forums.theregister.com/forum/all/2025/08/13/claude%5Fcodes%5Fcopious%5Fcoddling%5Fconfounds/ "View comments on this article") 

#### More about

* [  AI ](/Tag/AI/)
* [  Developer ](/Tag/Developer/)
* [  Security ](/Tag/Security/)

More like these

×

### More about

* [  AI ](/Tag/AI/)
* [  Developer ](/Tag/Developer/)
* [  Security ](/Tag/Security/)
* [  Software ](/Tag/Software/)

### Narrower topics

* [  2FA ](/Tag/2FA/)
* [  AdBlock Plus ](/Tag/AdBlock%20Plus/)
* [  Advanced persistent threat ](/Tag/Advanced%20persistent%20threat/)
* [  AIOps ](/Tag/AIOps/)
* [  API ](/Tag/API/)
* [  App ](/Tag/App/)
* [  Application Delivery Controller ](/Tag/Application%20Delivery%20Controller/)
* [  Audacity ](/Tag/Audacity/Audio%20Editor/ "Disambiguation: Audio Editor")
* [  Authentication ](/Tag/Authentication/)
* [  BEC ](/Tag/BEC/)
* [  Black Hat ](/Tag/Black%20Hat/)
* [  BSides ](/Tag/BSides/)
* [  Bug Bounty ](/Tag/Bug%20Bounty/)
* [  CHERI ](/Tag/CHERI/)
* [  CISO ](/Tag/CISO/)
* [  Common Vulnerability Scoring System ](/Tag/Common%20Vulnerability%20Scoring%20System/)
* [  Confluence ](/Tag/Confluence/)
* [  Cybercrime ](/Tag/Cybercrime/)
* [  Cybersecurity ](/Tag/Cybersecurity/)
* [  Cybersecurity and Infrastructure Security Agency ](/Tag/Cybersecurity%20and%20Infrastructure%20Security%20Agency/)
* [  Cybersecurity Information Sharing Act ](/Tag/Cybersecurity%20Information%20Sharing%20Act/)
* [  Database ](/Tag/Database/)
* [  Data Breach ](/Tag/Data%20Breach/)
* [  Data Protection ](/Tag/Data%20Protection/)
* [  Data Theft ](/Tag/Data%20Theft/)
* [  DDoS ](/Tag/DDoS/)
* [  DeepSeek ](/Tag/DeepSeek/)
* [  DEF CON ](/Tag/DEF%20CON/)
* [  Digital certificate ](/Tag/Digital%20certificate/)
* [  Encryption ](/Tag/Encryption/)
* [  End Point Protection ](/Tag/End%20Point%20Protection/)
* [  Exploit ](/Tag/Exploit/)
* [  Firewall ](/Tag/Firewall/)
* [  FOSDEM ](/Tag/FOSDEM/)
* [  FOSS ](/Tag/FOSS/)
* [  Gemini ](/Tag/Gemini/)
* [  Git ](/Tag/Git/)
* [  Google AI ](/Tag/Google%20AI/)
* [  GPT-3 ](/Tag/GPT-3/)
* [  GPT-4 ](/Tag/GPT-4/)
* [  Grab ](/Tag/Grab/)
* [  Graphics Interchange Format ](/Tag/Graphics%20Interchange%20Format/)
* [  Hacker ](/Tag/Hacker/)
* [  Hacking ](/Tag/Hacking/)
* [  Hacktivism ](/Tag/Hacktivism/)
* [  IDE ](/Tag/IDE/)
* [  Identity Theft ](/Tag/Identity%20Theft/)
* [  Image compression ](/Tag/Image%20compression/)
* [  Incident response ](/Tag/Incident%20response/)
* [  Infosec ](/Tag/Infosec/)
* [  Infrastructure Security ](/Tag/Infrastructure%20Security/)
* [  Jenkins ](/Tag/Jenkins/)
* [  Kenna Security ](/Tag/Kenna%20Security/)
* [  Large Language Model ](/Tag/Large%20Language%20Model/)
* [  Legacy Technology ](/Tag/Legacy%20Technology/)
* [  LibreOffice ](/Tag/LibreOffice/)
* [  Machine Learning ](/Tag/Machine%20Learning/)
* [  Map ](/Tag/Map/)
* [  MCubed ](/Tag/MCubed/)
* [  Microsoft 365 ](/Tag/Microsoft%20365/)
* [  Microsoft Office ](/Tag/Microsoft%20Office/)
* [  Microsoft Teams ](/Tag/Microsoft%20Teams/)
* [  Mobile Device Management ](/Tag/Mobile%20Device%20Management/)
* [  NCSAM ](/Tag/NCSAM/)
* [  NCSC ](/Tag/NCSC/)
* [  Neural Networks ](/Tag/Neural%20Networks/)
* [  NLP ](/Tag/NLP/)
* [  OpenOffice ](/Tag/OpenOffice/)
* [  Palo Alto Networks ](/Tag/Palo%20Alto%20Networks/)
* [  Password ](/Tag/Password/)
* [  Personally Identifiable Information ](/Tag/Personally%20Identifiable%20Information/)
* [  Phishing ](/Tag/Phishing/)
* [  Programming Language ](/Tag/Programming%20Language/)
* [  QR code ](/Tag/QR%20code/)
* [  Quantum key distribution ](/Tag/Quantum%20key%20distribution/)
* [  Ransomware ](/Tag/Ransomware/)
* [  Remote Access Trojan ](/Tag/Remote%20Access%20Trojan/)
* [  Retro computing ](/Tag/Retro%20computing/)
* [  REvil ](/Tag/REvil/)
* [  RSA Conference ](/Tag/RSA%20Conference/)
* [  Search Engine ](/Tag/Search%20Engine/)
* [  Software bug ](/Tag/Software%20bug/)
* [  Software License ](/Tag/Software%20License/)
* [  Spamming ](/Tag/Spamming/)
* [  Spyware ](/Tag/Spyware/)
* [  Star Wars ](/Tag/Star%20Wars/)
* [  Surveillance ](/Tag/Surveillance/)
* [  Tensor Processing Unit ](/Tag/Tensor%20Processing%20Unit/)
* [  Text Editor ](/Tag/Text%20Editor/)
* [  TLS ](/Tag/TLS/)
* [  TOPS ](/Tag/TOPS/)
* [  Trojan ](/Tag/Trojan/)
* [  Trusted Platform Module ](/Tag/Trusted%20Platform%20Module/)
* [  User interface ](/Tag/User%20interface/)
* [  Visual Studio ](/Tag/Visual%20Studio/)
* [  Visual Studio Code ](/Tag/Visual%20Studio%20Code/)
* [  Vulnerability ](/Tag/Vulnerability/)
* [  Wannacry ](/Tag/Wannacry/)
* [  WebAssembly ](/Tag/WebAssembly/)
* [  Web Browser ](/Tag/Web%20Browser/)
* [  WordPress ](/Tag/WordPress/)
* [  Zero trust ](/Tag/Zero%20trust/)

### Broader topics

* [  Self-driving Car ](/Tag/Self-driving%20Car/)

#### TIP US OFF

[Send us news](https://www.theregister.com/Profile/contact/)

---

### Other stories you might like

[ Curl project, swamped with AI slop, finds not all AI is bad Artificial intelligence works when humans use it wisely AI + ML2 Oct 2025 | 9 ](/2025/10/02/curl%5Fproject%5Fswamped%5Fwith%5Fai/?td=keepreading) 

[ Employees regularly paste company secrets into ChatGPT Microsoft Copilot, not so much AI + ML7 Oct 2025 | 47 ](/2025/10/07/gen%5Fai%5Fshadow%5Fit%5Fsecrets/?td=keepreading) 

[ AI startup Augment scraps 'unsustainable' pricing, users say new model is 10x worse Second huge increase in six months sees some devs heading for the exit AI + ML15 Oct 2025 | 25 ](/2025/10/15/augment%5Fpricing%5Fmodel/?td=keepreading) 

[ Resilient, continuously active data – with no compromise When the gap between data generation and action is a strategic liability, it's time for a fix Sponsored Feature ](/2026/02/17/resilient%5Fcontinuously%5Factive%5Fdata/?td=keepreading) 

[ Hobble your AI agents to prevent them from hurting you too badly That's the main takeaway from the Zenity AI Agent Security Summit Cybersecurity Month9 Oct 2025 | 11 ](/2025/10/09/zenity%5Fai%5Fagent%5Fsecurity%5Fsummit%5Frecap/?td=keepreading) 

[ Google DeepMind minds the patch with AI flaw-fixing scheme CodeMender has been generating fixes for vulnerabilities in open source projects Cybersecurity Month7 Oct 2025 | 1 ](/2025/10/07/google%5Fdeepmind%5Fpatches%5Fholes/?td=keepreading) 

[ AI gets more 'meh' as you get to know it better, researchers discover Most scientists now use the tech in their work, but still question its usefulness AI + ML8 Oct 2025 | 76 ](/2025/10/08/more%5Fresearchers%5Fuse%5Fai%5Ffew%5Fconfident/?td=keepreading) 

[ Anthropic brings mad Skills to Claude Teaching an old bot new tricks AI + ML16 Oct 2025 | 20 ](/2025/10/16/anthropic%5Fmad%5Fskills%5Fclaude/?td=keepreading) 

[ Managers are throwing entry-level workers under the bus in race to adopt AI ai-pocalypse Does it work? Inconclusive. Still, 55% of business leaders say that adopting AI is worth the impact on workers AI + ML10 Oct 2025 | 66 ](/2025/10/10/ai%5Fis%5Fdisplacing%5Fentrylevel%5Fprofessionals/?td=keepreading) 

[ Microsoft seeding Washington schools with free AI to get kids and teachers hooked To the slop trough, kiddos! AI + ML14 Oct 2025 | 18 ](/2025/10/14/microsoft%5Fai%5Fschools/?td=keepreading) 

[ McKinsey wonders how to sell AI apps with no measurable benefits Consultant says software vendors risk hiking prices without cutting costs or boosting productivity AI + ML9 Oct 2025 | 62 ](/2025/10/09/mckinsey%5Fai%5Fmonetization/?td=keepreading) 

[ This is your brain on bots: AI interaction may hurt students more than it helps More kids see AI as a friend or romantic interest, but few teachers know how to deal with the fallout, study finds AI + ML9 Oct 2025 | 20 ](/2025/10/09/ai%5Finteractions%5Fus%5Fstudents/?td=keepreading) 

The Register  Biting the hand that feeds IT

#### About Us

* [Contact us](https://www.theregister.com/Profile/contact/)
* [Advertise with us](https://situationpublishing.com/contact/)
* [Who we are](https://www.theregister.com/Profile/about%5Fthe%5Fregister/)

#### Our Websites

* [The Next Platform](https://www.nextplatform.com/)
* [DevClass](https://devclass.com/)
* [Blocks and Files](https://blocksandfiles.com/)

#### Your Privacy

* [Cookies Policy](https://www.theregister.com/Profile/cookies/)
* [Privacy Policy](https://www.theregister.com/Profile/privacy/)
* [Ts & Cs](https://www.theregister.com/Profile/terms%5Fand%5Fconditions%5Fof%5Fuse/)
* [Do not sell my personal information](https://www.theregister.com/Profile/privacy%5Fpolicy%5Fcalifornia%5Fresidents/)

[  ](https://situationpublishing.com/) 

 Copyright. All rights reserved © 1998–2026

```json
{
"@context":"http://schema.org",
"@type":"NewsArticle",
"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.theregister.com/2025/08/13/claude_codes_copious_coddling_confounds/"},
"headline":"Claude Code's copious coddling confounds cross customers",
"datePublished":"2025-08-13T20:15:12Z",
"dateModified":"2025-08-13T22:25:46Z",
"image":{"@type":"ImageObject","url":"https://regmedia.co.uk/2024/05/01/shutterstock_generic_claude.jpg","width":"1800","height":"900"},
"author":{"@type":"Person","name":"Thomas Claburn"},
"publisher":{"@type":"Organization","name":"The Register","url":"https://www.theregister.com/","logo":{"@type":"ImageObject","url":"https://www.theregister.com/design_picker/1fea2ae01c5036112a295123c3cc9c56eb28836a/graphics/std/red_logo_sans_strapline.png","width":330,"height":55}}
}
```
