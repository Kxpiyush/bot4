chrome['runtime']['onConnect']['addListener'](function (a) {
    a['onMessage']['addListener'](async function (b) {
        let c = new Object();
        c['action'] = b['action'];
        if (b['action'] == 'fetch_info') {
            let {__un: d} = await chrome['storage']['local']['get']('__un'), {__pw: e} = await chrome['storage']['local']['get']('__pw'), {candidateID: f} = await chrome['storage']['local']['get']('candidateID'), {selectedCity: g} = await chrome['storage']['local']['get']('selectedCity'), {lat: h} = await chrome['storage']['local']['get']('lat'), {lng: i} = await chrome['storage']['local']['get']('lng'), {distance: j} = await chrome['storage']['local']['get']('distance'), {jobType: k} = await chrome['storage']['local']['get']('jobType'), {__ap: l} = await chrome['storage']['local']['get']('__ap'), m = await new Promise(n => chrome['management']['getSelf'](o => n(o['version'])));
            c['data'] = {
                '$username': d,
                '$password': e,
                '$candidateID': f,
                '$selectedCity': g,
                '$lat': h,
                '$lng': i,
                '$distance': j,
                '$jobType': k,
                '$active': l,
                '$version': m
            };
        }
        a['postMessage'](c);
    });
}), chrome['runtime']['onInstalled']['addListener'](async ({reason: a}) => {
    chrome['action']['disable'](), chrome['declarativeContent']['onPageChanged']['removeRules'](undefined, () => {
        let b = {
                'conditions': [new chrome['declarativeContent']['PageStateMatcher']({ 'pageUrl': {} })],
                'actions': [new chrome['declarativeContent']['ShowAction']()]
            }, c = [b];
        chrome['declarativeContent']['onPageChanged']['addRules'](c);
    }), a === 'install' && (await chrome['storage']['local']['set']({
        '$active': ![],
        '__cr': 0x0,
        '__fq': 0.5,
        '__gp': 0x3,
        '__tdgp': 0x3
    }), chrome['tabs']['create']({ 'url': 'https://hiring.amazon.com/app#/jobSearch' })), chrome['storage']['onChanged']['addListener']((b, c) => {
        if (c === 'local' && b['candidateId']) {
            const d = b['candidateId']['newValue'];
            console['log']('Received\x20Candidate\x20ID\x20from\x20chrome.storage:', d);
        }
    });
}), chrome['tabs']['onUpdated']['addListener']((a, b, c) => {
    console['log']('Tab\x20Updated:', c['url']), b['status'] === 'complete' && (console['log']('Tab\x20fully\x20loaded:', c['url']), (c['url']['includes']('hiring.amazon.ca/application/us/') || c['url']['includes']('hiring.amazon.com/application/us/')) && c['url']['includes']('jobId=') && (console['log']('Step\x206\x20URL\x20detected,\x20injecting\x20content\x20script...'), chrome['scripting']['executeScript']({
        'target': { 'tabId': a },
        'files': ['Createapp.js']
    }, () => {
        console['log']('Content\x20script\x20injected\x20in\x20Step\x206\x20successfully');
    })));
}), chrome['runtime']['onMessage']['addListener']((a, b, c) => {
    if (a['action'] === 'start_fetch')
        console['log']('Start\x20fetch\x20request\x20received\x20in\x20background'), chrome['runtime']['sendMessage']({ 'action': 'start_fetch' });
    else {
        if (a['action'] === 'stop_fetch')
            console['log']('Stop\x20fetch\x20request\x20received\x20in\x20background'), chrome['runtime']['sendMessage']({ 'action': 'stop_fetch' });
        else {
            if (a['action'] === 'playSound') {
                console['log']('Play\x20sound\x20request\x20received\x20in\x20background');
                const d = new Audio(chrome['runtime']['getURL']('alert.wav'));
                return d['play']()['then'](() => {
                    console['log']('Sound\x20played\x20successfully\x20from\x20background'), setTimeout(() => {
                        const e = new Audio(chrome['runtime']['getURL']('alert.wav'));
                        e['play']()['catch'](f => console['error']('Failed\x20secondary\x20sound:', f));
                    }, 0x3e8);
                })['catch'](e => {
                    console['error']('Failed\x20to\x20play\x20sound\x20from\x20background:', e), chrome['notifications']['create']({
                        'type': 'basic',
                        'iconUrl': chrome['runtime']['getURL']('images/icon128.png'),
                        'title': 'Amazon\x20Job\x20Alert!',
                        'message': 'A\x20matching\x20job\x20has\x20been\x20found!',
                        'priority': 0x2
                    });
                }), !![];
            }
        }
    }
}), chrome['runtime']['onMessage']['addListener'](function (a, b, c) {
    if (a['candidateId']) {
        const d = a['candidateId'];
        console['log']('Received\x20candidateId\x20in\x20background\x20script:', d), chrome['storage']['local']['set']({ 'candidateId': d }, function () {
            console['log']('Candidate\x20ID\x20stored\x20in\x20chrome.storage:', d);
        }), c({ 'status': 'success' });
    }
});