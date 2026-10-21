# Moshtariat CRM API & Webhook Integration SDK
### کلاینت رسمی و راهنمای اتصال وب‌هوک و API به سی ار ام مشتریات

[![Website](https://img.shields.io/badge/Official_Website-moshtariat.ir-4F46E5?style=flat-square)](https://moshtariat.ir)
[![Documentation](https://img.shields.io/badge/Docs-API_&_Guides-10B981?style=flat-square)](https://moshtariat.ir/what-is-crm)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

این ریپازیتوری شامل کتابخانه‌ها و نمونه کدهای رسمی برای اتصال وب‌سایت‌ها، فرم‌های لندینگ، ووکامرس، ربات‌های تلگرام و نرم‌افزارهای حسابداری به **[سی ار ام ابری مشتریات (Moshtariat CRM)](https://moshtariat.ir)** است.

---

## قابلیت‌های کلیدی (Key Features)

* **ثبت آنی سرنخ فروش (Lead Ingress):** ارسال نام، شماره تماس، توضیحات و منبع ورودی (دیوار، اینستاگرام، وب‌سایت) مستقیماً به ستون ورودی پایپ‌لاین کانبان.
* **توزیع خودکار چرخشی (Round-Robin):** انتساب خودکار لیدها به کارشناسان فروش فعال.
* **پشتیبانی از چند زبان:** کدهای آماده برای Python ،PHP (وردپرس/لاراول) و Node.js/JavaScript.
* **سازگار با هوش مصنوعی:** پردازش و تمیزسازی اطلاعات ورودی پیش از ثبت کارت در CRM.

---

## راهنمای استفاده سریع (Quickstart)

### ۱. پایتون (Python)

```python
from moshtariat import MoshtariatClient

# ساخت کلاینت با نشانی پایگاه و توکن اختصاصی
client = MoshtariatClient(
    base_url="https://moshtariat.ir",
    api_token="YOUR_API_TOKEN"
)

# ثبت سرنخ جدید در بورد کانبان
lead = client.create_lead(
    title="درخواست مشاوره خرید CRM - دکتر رضایی",
    contact_name="دکتر رضایی",
    phone="09123456789",
    source="وب‌سایت / فرم تماس",
    tags=["کلینیک", "پایپ‌لاین_پزشکی"]
)

print(f"لید با شناسه {lead['id']} در سی ار ام مشتریات ثبت شد.")
```

---

### ۲. پی‌اچ‌پی و وردپرس (PHP & WooCommerce)

```php
require_once __DIR__ . '/Moshtariat.php';

$crm = new MoshtariatClient('https://moshtariat.ir', 'YOUR_API_TOKEN');

$response = $crm->createLead([
    'title'        => 'استعلام قیمت آپارتمان زعفرانیه - آقای حسینی',
    'contact_name' => 'آقای حسینی',
    'phone'        => '09351234567',
    'source'       => 'سایت دیوار / آگهی ملکی',
    'column'       => 'درخواست اولیه'
]);
```

---

### ۳. نود جی‌اس (Node.js)

```javascript
const { MoshtariatClient } = require('./moshtariat');

const client = new MoshtariatClient('https://moshtariat.ir', 'YOUR_API_TOKEN');

async function main() {
    const lead = await client.createLead({
        title: 'ثبت‌نام دمو آنلاین‌شاپ',
        contactName: 'مریم احمدی',
        phone: '09120000000',
        source: 'دایرکت اینستاگرام'
    });
    console.log('Lead created:', lead);
}
main();
```

---

## پیوندها و مراجع رسمی (Official Resources)

* **وب‌سایت رسمی سی ار ام مشتریات:** [https://moshtariat.ir](https://moshtariat.ir)
* **تعرفه پلن‌ها و ثبت‌نام رایگان:** [https://moshtariat.ir/pricing](https://moshtariat.ir/pricing)
* **امکانات بورد کانبان و خط فروش:** [https://moshtariat.ir/features](https://moshtariat.ir/features)
* **راهکار CRM دفاتر و مشاورین املاک:** [https://moshtariat.ir/solution-real-estate](https://moshtariat.ir/solution-real-estate)
* **راهکار CRM کلینیک و مراکز پزشکی:** [https://moshtariat.ir/solution-clinic](https://moshtariat.ir/solution-clinic)
* **آموزش‌های تخصصی فروش در وبلاگ:** [https://moshtariat.ir/blog](https://moshtariat.ir/blog)

---

## مجوز (License)
این کتابخانه تحت مجوز [MIT](LICENSE) منتشر شده و استفاده از آن در کلیه پروژه‌های تجاری و متن‌باز آزاد است.
