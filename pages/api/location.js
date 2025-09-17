// pages/api/location.js
export default async function handler(req, res) {
  try {
    const response = await fetch('https://forge.speedtest.cn/api/location/info');
    const data = await response.json();

    res.setHeader('Access-Control-Allow-Origin', '*'); // 可选：允许跨域
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch location info' });
  }
}