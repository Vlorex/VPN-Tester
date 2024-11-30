// User-Agent

if (navigator.userAgent ) {
    document.getElementById('userAgent').textContent = navigator.userAgent;
    document.getElementById('userAgent').classList.remove('notConnected');
    document.getElementById('userAgent').classList.add('connected');
} else {
    document.getElementById('userAgent').classList.remove('connected');
    document.getElementById('userAgent').classList.add('notConnected');
}

// Typ połączenia

if ('connection' in navigator) {
    document.getElementById('networkType').textContent = `${navigator.connection.effectiveType}`;
    document.getElementById('networkType').classList.remove('notConnected');
    document.getElementById('networkType').classList.add('connected');
} else {
    document.getElementById('networkType').textContent = `${None}`;
    document.getElementById('networkType').classList.remove('connected');
    document.getElementById('networkType').classList.add('notConnected');
}

// Stan połączenia (prędkość pobierania)

function downlink() {
    if ('connection' in navigator) {
        let go = setInterval(() => {
            document.getElementById('connectionStatus').textContent = `${navigator.connection.downlink} Mbps`;
        }, 100);
        document.getElementById('connectionStatus').classList.remove('notConnected');
        document.getElementById('connectionStatus').classList.add('connected');
    } else {
        document.getElementById('connectionStatus').textContent = `None`;
        setTimeout(() => {
            document.getElementById('connectionStatus').classList.remove('connected');
        document.getElementById('connectionStatus').classList.add('notConnected');
        }, 500);
    }
}

let mbps;

if ('connection' in navigator) {
    mbps = setInterval(downlink, 150);
} else {
    if (mbps) {
        setTimeout(() => {
            clearInterval(mbps);
        });
    }
}

// HTTPS

if (window.location.protocol) {
    document.getElementById('httpsStatus').classList.remove('notConnected');
    document.getElementById('httpsStatus').classList.add('connected');
    if (window.location.protocol === 'https:') {
        document.getElementById('httpsStatus').textContent = `https:`; 
    } else {
        document.getElementById('httpsStatus').textContent = `Not HTTPS -> ${window.location.protocol}`
    }
} else {
    document.getElementById('httpsStatus').textContent = `None`;
    document.getElementById('httpsStatus').classList.remove('connected');
    document.getElementById('httpsStatus').classList.add('notConnected');
}

// Weryfikacja JavaScript

if (navigator) {
    document.getElementById('jsStatus').classList.remove('notConnected');
    document.getElementById('jsStatus').classList.add('connected');
    if (typeof navigator !== 'undefined' && navigator.javaEnabled()) {
        document.getElementById('jsStatus').textContent = `JS on`;
    } else {
        document.getElementById('jsStatus').textContent = `JS off`;
    }
} else {
    document.getElementById('jsStatus').textContent = `None`;
    document.getElementById('jsStatus').classList.remove('connected');
    document.getElementById('jsStatus').classList.add('notConnected');
}

// Adres IP (z API)

fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => document.getElementById('ip').textContent = data.ip)
    .then(document.getElementById('ip').classList.remove('notConnected'))
    .then(document.getElementById('ip').classList.add('connected'))
    .catch(error => document.getElementById('ip').textContent = `None`)
    .catch(error => document.getElementById('ip').classList.remove('connected'))
    .catch(error => document.getElementById('ip').classList.add('notConnected'))

// Geolokalizacja (GPS)

fetch('https://ipinfo.io/json?token=75d8f3645b28a2')
    .then(response => response.json())
    .then(data => {
        if (data.country) {
            document.getElementById('country').classList.remove('notConnected');
            document.getElementById('country').classList.add('connected');
            document.getElementById('country').textContent = data.country;
        } else {
            document.getElementById('country').classList.remove('connected');
            document.getElementById('country').classList.add('notConnected');
            document.getElementById('country').textContent = `None`;
        }

        if (data.city) {
            document.getElementById('deliveryCity').classList.remove('notConnected');
            document.getElementById('deliveryCity').classList.add('connected');
            document.getElementById('deliveryCity').textContent = data.city;
        } else {
            document.getElementById('deliveryCity').classList.remove('connected');
            document.getElementById('deliveryCity').classList.add('notConnected');
            document.getElementById('deliveryCity').textContent = `None`;
        }

        if (data.region) {
            document.getElementById('deliveryRegion').classList.remove('notConnected');
            document.getElementById('deliveryRegion').classList.add('connected');
            document.getElementById('deliveryRegion').textContent = data.region;
        } else {
            document.getElementById('deliveryRegion').classList.remove('connected');
            document.getElementById('deliveryRegion').classList.add('notConnected');
            document.getElementById('deliveryRegion').textContent = `None`;
        }
    })

//  OS

if (navigator.platform) {
    document.getElementById('os').textContent = navigator.platform;
    document.getElementById('os').classList.remove('notConnected');
    document.getElementById('os').classList.add('connected');
} else {
    document.getElementById('os').classList.remove('connected');
    document.getElementById('os').classList.add('notConnected');
    document.getElementById('os').textContent = 'None';
}

// Device type

const userAgent = navigator.userAgent.toLowerCase();

if (userAgent) {
    if (userAgent.includes('mobile')) {
        document.getElementById('deviceType').textContent = `Phone`;
    } else if (userAgent.includes('tablet')) {
        document.getElementById('deviceType').textContent = `Tablet`;
    } else {
        document.getElementById('deviceType').textContent = `Komputer Stacjonarny/laptop`;
    }
    document.getElementById('deviceType').classList.remove('notConnected');
    document.getElementById('deviceType').classList.add('connected');
} else {
    document.getElementById('deviceType').classList.remove('connected');
    document.getElementById('deviceType').classList.add('notConnected');
    document.getElementById('deviceType').textContent = 'None';
}

// History sites

const sites = [
    'facebook.com', 'chatgpt.com', 'google.com', 'youtube.com', 'twitter.com',
    'instagram.com', 'linkedin.com', 'reddit.com', 'wikipedia.org', 'yahoo.com',
    'amazon.com', 'ebay.com', 'netflix.com', 'spotify.com', 'pinterest.com',
    'tiktok.com', 'snapchat.com', 'tumblr.com', 'apple.com', 'microsoft.com',
    'wordpress.org', 'github.com', 'stackoverflow.com', 'wordpress.com', 'airbnb.com',
    'imdb.com', 'bbc.com', 'cnn.com', 'nytimes.com', 'theguardian.com',
    'bloomberg.com', 'forbes.com', 'businessinsider.com', 'vox.com', 'politico.com',
    'bbc.co.uk', 'abc.com', 'huffpost.com', 'reuters.com', 'dailymotion.com',
    'vimeo.com', 'soundcloud.com', 'twitch.tv', 'disneyplus.com', 'flickr.com',
    'medium.com', 'tumblr.com', 'quora.com', 'etsy.com', 'behance.net',
    'dribbble.com', 'stackoverflow.com', 'dev.to', 'learn.microsoft.com', 'coursera.org',
    'udemy.com', 'khanacademy.org', 'edx.org', 'codecademy.com', 'pluralsight.com',
    'shopify.com', 'bigcommerce.com', 'wix.com', 'weebly.com', 'craigslist.org',
    'ebay.co.uk', 'aliexpress.com', 'mercadolibre.com', 'target.com', 'walmart.com',
    'bestbuy.com', 'home depot.com', 'costco.com', 'lowes.com', 'nordstrom.com',
    'sephora.com', 'zara.com', 'hm.com', 'asos.com', 'gap.com',
    'uniqlo.com', 'nike.com', 'adidas.com', 'reebok.com', 'underarmour.com',
    'puma.com', 'vans.com', 'converse.com', 'newbalance.com', 'timberland.com',
    'mango.com', 'lulus.com', 'modcloth.com', 'bcbg.com', 'express.com',
    'anthropologie.com', 'theoutnet.com', 'neimanmarcus.com', 'saksfifthavenue.com', 'bloomingdales.com',
    'theory.com', 'jcrew.com', 'madewell.com', 'banana republic.com', 'oldnavy.com',
    'gap.com', 'landrover.com', 'audi.com', 'mercedes-benz.com', 'bmw.com',
    'toyota.com', 'ford.com', 'honda.com', 'chevrolet.com', 'nissan.com',
    'ferrari.com', 'lamborghini.com', 'porsche.com', 'astonmartin.com', 'mclaren.com',
    'kia.com', 'hyundai.com', 'subaru.com', 'volvo.com', 'mazda.com',
    'buick.com', 'chrysler.com', 'jeep.com', 'ramtrucks.com', 'gmc.com',
    'mitsubishi.com', 'peugeot.com', 'fiat.com', 'skoda.com', 'seat.com',
    'renault.com', 'tesla.com', 'rivian.com', 'lucidmotors.com', 'byton.com',
    'snapdragon.com', 'qualcomm.com', 'samsung.com', 'lg.com', 'panasonic.com',
    'sonymobile.com', 'motorola.com', 'huawei.com', 'xiaomi.com', 'oppo.com',
    'vivo.com', 'nokia.com', 'blackberry.com', 'zte.com', 'alcatel-lucent.com',
    'vizio.com', 'tcl.com', 'sharp.com', 'toshiba.com', 'hisense.com'
];

const visitedSites = [];

sites.forEach(site => {
    const img = document.createElement('img');
    img.src = `https://${site}/favicon.ico`;
    img.onload = () => visitedSites.push(site);
    img.onerror = () => {}; // Nie odwiedzone
});

if (visitedSites) {
    setTimeout(() => {
        const historyList = document.getElementById('historyInfo');
        historyList.innerHTML = ''; // Wyczyść listę przed dodaniem nowych elementów
        historyList.classList.remove('notConnected');
        historyList.classList.add('connected');

        if (visitedSites.length) {
            visitedSites.forEach(site => {
                const listItem = document.createElement('li');
                listItem.textContent = site;
                historyList.appendChild(listItem);
            });
        } else {
            const listItem = document.createElement('li');
            listItem.textContent = 'Not finded pages.';
            document.getElementById('historyInfo').classList.remove('connected');
    document.getElementById('historyInfo').classList.add('notConnected');
            historyList.appendChild(listItem);
        }
    }, 3000);
}

// Czas

const now = new Date();

if (now) {
    document.getElementById('timeInfo').classList.remove('notConnected');
    document.getElementById('timeInfo').classList.add('connected')
    document.getElementById('timeInfo').textContent = `Twój lokalny czas: ${now.toLocaleString()}`;
} else {
    document.getElementById('timeInfo').classList.remove('connected');
    document.getElementById('timeInfo').classList.add('notConnected')
}

// Język

const language = navigator.language || 'Nieznany';

if (language) {
    document.getElementById('languageInfo').classList.remove('notConnected');
    document.getElementById('languageInfo').classList.add('connected');
    document.getElementById('languageInfo').textContent = `Język systemu: ${language}`;
} else {
    document.getElementById('languageInfo').classList.remove('connected');
    document.getElementById('languageInfo').classList.add('notConnected');
}

// Dane techniczne

const platform = navigator.platform || 'Nieznana platforma';
const cores = navigator.hardwareConcurrency || 'Nieznana liczba';
const memory = navigator.deviceMemory || 'Nieznana ilość';

if (platform || cores || memory) {
    document.getElementById('deviceSpecs').innerHTML = `
    Platform: ${platform} Bit<br>
    Procesor cores: ${cores} cores<br>
    Memory: ${memory}GB`;
    document.getElementById('deviceSpecs').classList.remove('notConnected');
    document.getElementById('deviceSpecs').classList.add('connected');
} else {
    document.getElementById('deviceSpecs').classList.remove('connected');
    document.getElementById('deviceSpecs').classList.add('notConnected');
    document.getElementById('deviceSpecs').textContent = `None`;
}

// Typ połączenia

if (navigator.connection) {
    document.getElementById('networkInfo').classList.remove('notConnected');
    document.getElementById('networkInfo').classList.add('connected');
    const connection = navigator.connection;
    document.getElementById('networkInfo').innerHTML = `
        Typ połączenia: ${connection.effectiveType || 'Nieznany'}<br>
        Maksymalna prędkość: ${connection.downlink || 'Nieznana'} Mbps<br>
        Opóźnienie (ping): ${connection.rtt || 'Nieznane'} ms`;
} else {
    document.getElementById('networkInfo').classList.remove('connected');
    document.getElementById('networkInfo').classList.add('notConnected');
    document.getElementById('networkInfo').textContent = 'Nie można uzyskać danych sieciowych.';
}