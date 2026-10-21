/**
 * Moshtariat CRM Node.js Client
 * Official Website: https://moshtariat.ir
 */

const https = require('https');

class MoshtariatClient {
    constructor(baseUrl = 'https://moshtariat.ir', apiToken = '') {
        this.baseUrl = baseUrl.replace(/\/+$/, '');
        this.apiToken = apiToken;
    }

    createLead(data) {
        return new Promise((resolve, reject) => {
            const url = new URL(this.baseUrl + '/?controller=api&action=lead_ingress');
            const body = JSON.stringify(data);
            const req = https.request(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.apiToken}`,
                    'User-Agent': 'MoshtariatNodeClient/1.0',
                    'Content-Length': Buffer.byteLength(body)
                }
            }, res => {
                let chunks = '';
                res.on('data', d => chunks += d);
                res.on('end', () => {
                    try { resolve(JSON.parse(chunks)); } catch(e) { resolve({ success: true, raw: chunks }); }
                });
            });
            req.on('error', reject);
            req.write(body);
            req.end();
        });
    }
}

module.exports = { MoshtariatClient };
