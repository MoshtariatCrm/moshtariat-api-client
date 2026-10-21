<?php
/**
 * Moshtariat CRM PHP & WooCommerce Client
 * Official Website: https://moshtariat.ir
 */

class MoshtariatClient {
    private string $baseUrl;
    private string $apiToken;

    public function __construct(string $baseUrl = 'https://moshtariat.ir', string $apiToken = '') {
        $this->baseUrl = rtrim($baseUrl, '/');
        $this->apiToken = $apiToken;
    }

    public function createLead(array $leadData): array {
        $url = $this->baseUrl . '/?controller=api&action=lead_ingress';
        $options = [
            'http' => [
                'header'  => "Content-Type: application/json\r\n" .
                             "Authorization: Bearer {$this->apiToken}\r\n" .
                             "User-Agent: MoshtariatPHPClient/1.0\r\n",
                'method'  => 'POST',
                'content' => json_encode($leadData),
                'timeout' => 10,
            ]
        ];
        $context = stream_context_create($options);
        $result = @file_get_contents($url, false, $context);
        if ($result === false) {
            return ['success' => false, 'error' => 'Connection failed'];
        }
        return json_decode($result, true) ?: ['success' => true];
    }
}
