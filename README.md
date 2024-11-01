# puppeteer-and-launch-easabbir

## Puppeteer Launch & Connect

### টাস্কসঃ



1.   **ব্রাউজার লঞ্চ করুন**
    1. স্ক্রিপ্ট**:** `launch-browser.mjs` 

    2. একটি `launch-browser.mjs` নামে ফাইল তৈরি করুন যা একটি ব্রাউজার চালু করবে 
    এবং ব্রাউজারের ভার্সন লগ করবে `console.log({ version })`

---

2.    **userDataDir ব্যবহার করে একটি ব্রাউজার লঞ্চ করুন**
    1. স্ক্রিপ্ট**:** `launch-browser-userDataDir.mjs` 

    2. একটি `launch-browser-userDataDir.mjs` নামে স্ক্রিপ্ট তৈরি করুন যা userDataDir ব্যবহার করে একটি ব্রাউজার চালু করবে 
    এবং ব্রাউজারের ভার্সন লগ করবে। ভার্সন এইভাবে লগ করবেনঃ `console.log({ version })`

---

3.    **একটি স্ক্রিপ্ট তৈরি করুন যা একটি ওয়েবসাইটের title এবং url লগ করে।**
    1. স্ক্রিপ্ট**:** `extract-title-url.mjs` 
    
    2. `extract-title-url.mjs` নামে একটি স্ক্রিপ্ট তৈরি করুন যা userDataDir এবং executablePath ব্যবহার করে একটি ব্রাউজার চালু করবে, 
    একটি ওয়েবসাইটে যাবে এবং ওয়েবসাইটের title এবং url লগ করবে এই ফরম্যাটে `console.log({ title, url });` 

To know the path: which google-chrome 

---

4.    একটি স্ক্রিপ্ট তৈরি করুন যা একটি ব্রাউজারে সংযুক্ত হয়
    1. স্ক্রিপ্ট**:** `connect-browser.mjs` 

    2. `connect-browser.mjs` নামে একটি স্ক্রিপ্ট তৈরি করুন যা `browserWSEndpoint` 
    এবং রিমোট ডিবাগিং পোর্ট ব্যবহার করে একটি ব্রাউজারে সংযুক্ত হবে।

google-chrome --remote-debugging-port=9222 --user-data-dir=./user_data

or

google-chrome-stable --remote-debugging-port=9222 --user-data-dir=./user_data

Chrome চালু করার পর, নিচের URL-এ যান:

http://localhost:9222/json

সেখানে আপনি ব্রাউজার এবং তার পৃষ্ঠাগুলোর তথ্য দেখতে পাবেন। webSocketDebuggerUrl এর মানটি

খুঁজুন এবং এটি <your-websocket-id> এর স্থানে বসান। 

in the file connect-browser.mjs

then execute the file 

connect-browser.mjs

---
Learning to install pnpm

sudo apt update

corepack enable

corepack prepare pnpm@latest --activate

---
Installing puppeteer through command line

pnpm i puppeteer

---
how to check chrome version installed with puppeteer

ls ~/.cache/puppeteer/chrome

---
Installing tsx

install tsx
npm -i -g tsx

---
running puppeteer

import puppetter from 'puppeteer'

const browser = puppeteer.launch()

const page = browser.newpage()

---
Learn more about: 
promise and function 

---
