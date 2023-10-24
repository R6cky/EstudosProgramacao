import requests


def subdomain(domain):
    req = requests.get(domain)
    return print(req.json())
