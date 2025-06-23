<p align="center">
  <a href="https://git.io/typing-svg">
    <img src="https://readme-typing-svg.demolab.com?font=Black+Ops+One&size=80&pause=1000&color=8A2BE2&center=true&vCenter=true&width=1000&height=200&lines=HACKLINK+XMD;VERSION+1.0.0;BY+HACKLINK+TECH+INC." alt="Typing SVG" />
  </a>
</p>

<p align="center">
  <img src="https://qu.ax/Zqpxy.jpg" width="800"/>
</p>
---

## ⭐ Fork the Repository

Click the button below to fork the repository and get your own copy:

[![FORK REPO](https://img.shields.io/badge/FORK%20REPO-Click%20Here-007ACC?style=for-the-badge&logo=github)](https://github.com/Russian-mafia1/HACKLINK-XMD)


---
## ⚙️ GET YOUR SESSION

[![PAIR CODE](https://img.shields.io/badge/GET%20SESSION_ID-Generate%20Now-4CAF50?style=for-the-badge&logo=whatsapp)](coming soon)

---
## ⌛ WHATSAPP CHANNEL SUPPORT 

[![HACKLINK TECH.INC](https://img.shields.io/badge/JOIN%20MY-WHATSAPP%20CHANNEL-25D366?style=for-the-badge&logo=whatsapp)](https://whatsapp.com/channel/0029Vb6Gy5XDzgTBTarvMW1O)
---

## 🚀 Quick Deployment Options

### <br>    DEPLOY_RENDER 

<a href='https://dashboard.render.com' target="_blank"><img alt='DEPLOY' src='https://img.shields.io/badge/RENDER-h?color=maroon&style=for-the-badge&logo=render'/></a></p>



⚡ DEPLOY ON WORKFLOW ⚡

```

name: Node.js CI

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
  schedule:
    - cron: '0 */6 * * *'  

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [20.x]

    steps:
    - name: Checkout repository
      uses: actions/checkout@v3

    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}

    - name: Install dependencies
      run: npm install

    - name: Install FFmpeg
      run: sudo apt-get install -y ffmpeg

    - name: Start application with timeout
      run: |
        timeout 21590s npm start  # Limite l'exécution à 5h 59m 50s

    - name: Save state (Optional)
      run: |
        ./save_state.sh
```

## ❤️ Credits
[![GitHub - HACKLINK TECH.INC](https://img.shields.io/badge/GitHub-HACKLINK--TECH-181717?style=for-the-badge&logo=github)](https://github.com/Russian-mafia1)

 
