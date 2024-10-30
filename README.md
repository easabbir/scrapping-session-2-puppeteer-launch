# puppeteer-and-launch-easabbir


# Puppeteer Launch & Connect



### টাস্কসঃ

1. **ব্রাউজার লঞ্চ করুন**
    1. স্ক্রিপ্ট**:** `launch-browser.mjs` 
    2. একটি `launch-browser.mjs` নামে ফাইল তৈরি করুন যা একটি ব্রাউজার চালু করবে এবং ব্রাউজারের ভার্সন লগ করবে `console.log({ version })`

---

1. **userDataDir ব্যবহার করে একটি ব্রাউজার লঞ্চ করুন**
    1. স্ক্রিপ্ট**:** `launch-browser-userDataDir.mjs` 
    2. একটি `launch-browser-userDataDir.mjs` নামে স্ক্রিপ্ট তৈরি করুন যা userDataDir ব্যবহার করে একটি ব্রাউজার চালু করবে এবং ব্রাউজারের ভার্সন লগ করবে। ভার্সন এইভাবে লগ করবেনঃ `console.log({ version })`

---

1. **একটি স্ক্রিপ্ট তৈরি করুন যা একটি ওয়েবসাইটের title এবং url লগ করে।**
    1. স্ক্রিপ্ট**:** `extract-title-url.mjs` 
    2. `extract-title-url.mjs` নামে একটি স্ক্রিপ্ট তৈরি করুন যা userDataDir এবং executablePath ব্যবহার করে একটি ব্রাউজার চালু করবে, একটি ওয়েবসাইটে যাবে এবং ওয়েবসাইটের title এবং url লগ করবে এই ফরম্যাটে `console.log({ title, url });` 

---

1. একটি স্ক্রিপ্ট তৈরি করুন যা একটি ব্রাউজারে সংযুক্ত হয়
    1. স্ক্রিপ্ট**:** `connect-browser.mjs` 
    2. `connect-browser.mjs` নামে একটি স্ক্রিপ্ট তৈরি করুন যা `browserWSEndpoint` এবং রিমোট ডিবাগিং পোর্ট ব্যবহার করে একটি ব্রাউজারে সংযুক্ত হবে।
