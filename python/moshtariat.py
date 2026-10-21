# -*- coding: utf-8 -*-
"""Moshtariat CRM Python Client."""

import urllib.request
import urllib.parse
import json

class MoshtariatClient:
    def __init__(self, base_url: str = "https://moshtariat.ir", api_token: str = ""):
        self.base_url = base_url.rstrip("/")
        self.api_token = api_token

    def create_lead(self, title: str, contact_name: str = "", phone: str = "", source: str = "API", tags: list = None) -> dict:
        url = f"{self.base_url}/?controller=api&action=lead_ingress"
        payload = {
            "title": title,
            "contact_name": contact_name,
            "phone": phone,
            "source": source,
            "tags": tags or []
        }
        data = json.dumps(payload).encode("utf-8")
        req = urllib.request.Request(url, data=data, headers={
            "Content-Type": "application/json",
            "Authorization": f"Bearer {self.api_token}",
            "User-Agent": "MoshtariatPythonClient/1.0"
        })
        try:
            with urllib.request.urlopen(req, timeout=10) as resp:
                return json.loads(resp.read().decode("utf-8"))
        except Exception as e:
            return {"success": False, "error": str(e)}
