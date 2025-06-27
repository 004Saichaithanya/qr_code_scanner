# 📱 QR Code Scanner Web App

A simple and lightweight QR Code Scanner web application built using **HTML, CSS, and JavaScript**. It uses the popular `html5-qrcode` library to access your device’s camera for real-time QR code scanning.

---

## 📌 Features

- 📸 Scan QR codes using your device's **camera**
- 📄 (Optional) Scan QR codes from an uploaded image file
- 🎨 Clean, modern, and responsive UI with styled buttons and scanner frame
- 🔒 Runs directly in your browser — no backend required

---

## 🛠️ Tech Stack

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla)**
- [html5-qrcode](https://github.com/mebjas/html5-qrcode) (via CDN)

---

## 📸 Screenshots
![image](https://github.com/user-attachments/assets/8d7f821f-f813-4353-b74a-289d61727397)

![image](https://github.com/user-attachments/assets/dbce43cb-9ab4-423f-aab5-b94dfc2d3e79)

For Testing I added QR Code images in the test folder

---

## 📖 How It Works

- Uses **html5-qrcode** to access the device camera
- Defines a scanning area (`qrbox`) and scanning frame rate (`fps`)
- On successful QR code detection:
  - Displays the decoded text on the screen
  - Optionally stops scanning immediately after detection
- Clean, styled buttons to **Start** and **Stop** the scanner

---

## 🚀 How to Run This Project

1. **Clone the repository or download the files**
   ```bash
   git clone https://github.com/yourusername/qr-code-scanner
````

2. **Open `index.html` in your browser**

3. **Allow camera permissions** when prompted.

4. **Point to a QR code** and see the decoded result appear.

---

## 📦 Project Structure

```
qr-code-scanner/
 ├── index.html       # Main HTML page
 ├── script.js        # JavaScript logic for scanning
 └── (Optional style inside HTML or separate .css file)
```

---

## ✅ Live Demo

**You can deploy this easily on:**

* **GitHub Pages**
* **Netlify**
* **Vercel**
* **Render (static site)**

---

## 🙌 Acknowledgements

* [html5-qrcode](https://github.com/mebjas/html5-qrcode) by @mebjas

---

## 📌 License

This project is open-source and available under the [MIT License](LICENSE).

---

## ✨ Author

**Sai Chaithanya Poloju**

> Built with ❤️ for HackWeek projects and learning.
