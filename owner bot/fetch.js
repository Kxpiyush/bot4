(async function (a) {
    document['head']['insertAdjacentHTML']('beforeend', '<style>.swal2-modal\x20:is(h2,\x20p){color:\x20initial;\x20margin:\x200;line-height:\x201.25;}.swal2-modal\x20p+p{margin-top:\x201rem;}#consulate_date_time,#asc_date_time{display:block!important;}.swal2-select{width:auto!important;}.swal2-timer-progress-bar{background:rgba(255,255,255,0.6)!important;}.swal2-toast.swal2-show{background:rgba(0,0,0,0.75)!important;}</style>');
    let b = null, c = 500;
    const d = [
        'already-applied-but-can-be-reset',
        'consent'
    ];
    function e() {
        const N = window['location']['href'];
        return d['some'](O => N['includes'](O));
    }
    if (e())
        return;
    async function f() {
        const N = 0x2710, O = 0xfa;
        let P = 0x0;
        while (P < N) {
            const R = document['querySelector']('input[data-test-id=\x22input-test-id-emailId\x22]');
            if (R && R['value'])
                return R;
            await new Promise(S => setTimeout(S, O)), P += O;
        }
        await Swal['fire']({
            'title': 'Attention\x20please.',
            'html': 'Please\x20sign-in\x20again',
            'allowEscapeKey': ![],
            'allowEnterKey': ![],
            'allowOutsideClick': ![],
            'icon': 'warning',
            'confirmButtonText': 'Ok'
        });
        const Q = y(i);
        return location['href'] = location['href']['replace']('https://' + Q['domain'] + '/#/'), null;
    }
    let g = null, h = null, i = null, j = null, k = null, l = 43.653524, m = -79.383907, n = 0x5, o = null, p = ![], q = ![], r = 0x0, s = 'blsappointments.ca@gmail.com', t = 0x64, u = 0x5, v = 'https://amazonjobsschedulert.azurewebsites.net', w = ![], x = ![];
    $version = '1.0.0';
    function y(N) {
        return N === 'United\x20States' ? {
            'domain': 'hiring.amazon.com',
            'locale': 'en-US',
            'country': 'United\x20States',
            'countryCode': 'US'
        } : {
            'domain': 'hiring.amazon.ca',
            'locale': 'en-CA',
            'country': 'Canada',
            'countryCode': 'CA'
        };
    }
    async function z() {
        [g, h, j, k, l, m, n, o, p, $version, $credits, $isProUser, i] = await Promise['all']([
            chrome['storage']['local']['get']('__un')['then'](N => N['__un'] || null),
            chrome['storage']['local']['get']('__pw')['then'](N => N['__pw'] || null),
            chrome['storage']['local']['get']('candidateID')['then'](N => N['candidateID'] || null),
            chrome['storage']['local']['get']('selectedCity')['then'](N => N['selectedCity'] || 'Toronto'),
            chrome['storage']['local']['get']('lat')['then'](N => N['lat'] || 43.653524),
            chrome['storage']['local']['get']('lng')['then'](N => N['lng'] || -79.383907),
            chrome['storage']['local']['get']('distance')['then'](N => N['distance'] || 0x5),
            chrome['storage']['local']['get']('jobType')['then'](N => N['jobType'] || 'Any'),
            chrome['storage']['local']['get']('__ap')['then'](N => typeof N['__ap'] !== 'undefined' ? N['__ap'] : ![]),
            chrome['storage']['local']['get']('$version')['then'](N => N['$version'] || '1.0.0'),
            chrome['storage']['local']['get']('__cr')['then'](N => N['__cr']),
            chrome['storage']['local']['get']('__isProUser')['then'](N => N['__isProUser'] || ![]),
            chrome['storage']['local']['get']('__country')['then'](N => N['__country'] || null)
        ]);
    }
    chrome['storage']['onChanged']['addListener'](function (N, O) {
        O === 'local' && (N['selectedCity'] && (k = N['selectedCity']['newValue']), N['distance'] && (n = N['distance']['newValue']), N['lat'] && (l = N['lat']['newValue']), N['lng'] && (m = N['lng']['newValue']), N['jobType'] && (o = N['jobType']['newValue']));
    }), await z();
    async function A(N) {
        if (N)
            return;
        let O = await chrome['storage']['local']['get']([
            '__cr',
            '$host',
            '__sync',
            '__isProUser'
        ]);
        const {
                __cr: P,
                $host: Q = 'https://amazonjobsschedulert.azurewebsites.net',
                __sync: R = 0x1,
                __isProUser: S
            } = O, T = R * 0x3c * 0x3e8;
        if (S) {
            setTimeout(A, T);
            return;
        }
        let U = g;
        try {
            const V = await fetch(Q + '/set-credits', {
                'method': 'POST',
                'body': JSON['stringify']({
                    'email': U,
                    'version': $version,
                    'credits': P
                }),
                'headers': { 'Content-type': 'application/json;\x20charset=UTF-8' }
            });
            if (!V['ok'])
                throw new Error('Failed\x20to\x20sync:\x20' + await V['text']());
            let W = await V['json']();
            await chrome['storage']['local']['set']({
                '__cr': W['__cr'],
                '$host': W['__host'],
                '__sync': W['__sync']
            });
        } catch (X) {
            console['error']('Sync\x20failed,\x20retrying\x20in\x20' + T + 'ms', X);
        } finally {
            setTimeout(A, T);
        }
    }
    async function B() {
        const N = window['location']['href'], O = N['includes']('#/contactInformation'), P = N['includes']('#/login'), Q = N['includes']('jobSearch');
        let R = await chrome['storage']['local']['get']('__uc')['then'](({__uc: U}) => U), S = a['includes']('login'), T = a['includes']('jobSearch');
        if (P) {
            const U = document['querySelector']('button[data-test-component=\x22StencilReactButton\x22][data-test-id=\x22consentBtn\x22]\x20div[data-test-component=\x22StencilReactRow\x22].hvh-careers-emotion-n1m10m');
            if (U)
                U['click']();
            else {
            }
            if (!i) {
                const Y = document['querySelector']('div[data-test-component=\x22StencilReactRow\x22].css-hxw9t3\x20button[data-test-component=\x22StencilReactButton\x22][type=\x22button\x22].e4s17lp0.css-1ipr55l\x20div[data-test-component=\x22StencilReactRow\x22].css-n1m10m');
                if (Y)
                    Y['click']();
                else {
                }
                i = await Swal['fire']({
                    'title': 'Attention\x20please.',
                    'html': 'Please\x20select\x20your\x20country',
                    'input': 'select',
                    'inputOptions': {
                        'Canada': 'Canada',
                        'United\x20States': 'United\x20States'
                    },
                    'inputPlaceholder': 'Select\x20a\x20country',
                    'allowEscapeKey': ![],
                    'allowEnterKey': ![],
                    'allowOutsideClick': ![],
                    'icon': 'warning',
                    'confirmButtonText': 'Next',
                    'inputValidator': Z => {
                        return new Promise(a0 => {
                            Z ? a0() : a0('You\x20need\x20to\x20select\x20a\x20country');
                        });
                    }
                })['then'](Z => {
                    const a0 = Z['value'];
                    return chrome['storage']['local']['set']({ '__country': a0 }), a0;
                });
            }
            !g && (g = await Swal['fire']({
                'title': 'Attention\x20please.',
                'html': 'Please\x20provide\x20the\x20email\x20to\x20login',
                'input': 'email',
                'inputLabel': 'Your\x20email\x20address',
                'inputPlaceholder': 'Enter\x20your\x20email\x20address',
                'allowEscapeKey': ![],
                'allowEnterKey': ![],
                'allowOutsideClick': ![],
                'icon': 'warning',
                'confirmButtonText': 'Next'
            })['then'](Z => {
                return chrome['storage']['local']['set']({ '__un': Z['value'] }), Z['value'];
            }));
            !h && (h = await Swal['fire']({
                'title': 'Attention\x20please.',
                'html': 'Please\x20provide\x20the\x206-digit\x20PIN',
                'input': 'password',
                'inputLabel': 'Your\x206-digit\x20PIN',
                'inputPlaceholder': 'Enter\x20your\x206-digit\x20PIN',
                'inputAttributes': {
                    'maxlength': 0x6,
                    'pattern': '\x5cd*'
                },
                'allowEscapeKey': ![],
                'allowEnterKey': ![],
                'allowOutsideClick': ![],
                'icon': 'warning',
                'confirmButtonText': 'Submit'
            })['then'](Z => {
                return chrome['storage']['local']['set']({ '__pw': Z['value'] }), Z['value'];
            }));
            const V = document['querySelector']('#country-toggle-button');
            if (V) {
                V['click'](), await new Promise(a1 => setTimeout(a1, 0x1f4));
                const Z = await new Promise(a1 => {
                        chrome['storage']['local']['get']('__country', a2 => {
                            a1(a2['__country'] || 'United\x20States');
                        });
                    }), a0 = document['querySelector']('ul[role=\x22listbox\x22]');
                if (a0) {
                    const a1 = a0['querySelectorAll']('li');
                    a1['forEach'](a2 => {
                        a2['textContent']['trim']() === Z && a2['click']();
                    });
                } else {
                }
            } else {
            }
            const W = document['querySelector']('input[data-test-id=\x22input-test-id-login\x22]');
            if (W) {
                W['value'] = g, W['dispatchEvent'](new Event('input', { 'bubbles': !![] }));
                const a2 = document['querySelectorAll']('div[data-test-component=\x22StencilReactRow\x22]');
                a2['forEach'](a3 => {
                    a3['textContent']['trim']() === 'Continue' && a3['click']();
                });
            }
            await new Promise(a3 => setTimeout(a3, 0x3e8));
            const X = document['querySelector']('input[data-test-id=\x22input-test-id-pin\x22]');
            if (X) {
                X['value'] = h, X['dispatchEvent'](new Event('input', { 'bubbles': !![] }));
                const a3 = document['querySelector']('button[data-test-id=\x22button-continue\x22]');
                a3 && a3['click']();
            }
        }
        if (Q && !R) {
            const a4 = document['querySelector']('button[data-test-component=\x22StencilReactButton\x22][data-test-id=\x22consentBtn\x22]\x20div[data-test-component=\x22StencilReactRow\x22].hvh-careers-emotion-n1m10m');
            if (a4) {
                a4['click']();
                const a5 = chrome['runtime']['getURL']('images/popup.png');
                await Swal['fire']({
                    'title': 'Turn\x20on\x20your\x20pop-ups',
                    'html': '<p>Please\x20make\x20sure\x20you\x20have\x20enabled\x20pop-ups\x20in\x20your\x20browser\x20settings\x20for\x20this\x20extension\x20to\x20work\x20properly.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22' + a5 + '\x22\x20alt=\x22Enable\x20Pop-ups\x22\x20style=\x22max-width:100%;\x20height:auto;\x20margin-top:10px;\x22>',
                    'icon': 'warning',
                    'confirmButtonText': 'OK,\x20I\x20have\x20enabled\x20pop-ups',
                    'allowEscapeKey': ![],
                    'allowEnterKey': ![],
                    'allowOutsideClick': ![]
                })['then'](() => {
                    return chrome['storage']['local']['set']({ '__uc': !![] });
                });
            } else {
            }
        }
        if (Q) {
            D();
            if (p) {
                K();
                return;
            }
        }
        if (O) {
        }
    }
    async function C() {
        try {
            if (!E())
                return;
            if (typeof p === 'undefined' || !p)
                return;
            Swal['fire']({
                'toast': !![],
                'position': 'bottom-start',
                'timer': c,
                'showConfirmButton': ![],
                'timerProgressBar': !![],
                'html': '<span\x20style=\x22color:\x20white;\x22>Fetching\x20Jobs...</span>'
            });
            const N = o !== 'Any' ? [{
                        'key': 'jobType',
                        'val': [o]
                    }] : [], O = new Date()['toISOString']()['split']('T')[0x0], P = y(i), Q = {
                    'operationName': 'searchJobCardsByLocation',
                    'variables': {
                        'searchJobRequest': {
                            'locale': P['locale'],
                            'country': P['country'],
                            'keyWords': '',
                            'equalFilters': [],
                            'containFilters': [
                                {
                                    'key': 'isPrivateSchedule',
                                    'val': ['false']
                                },
                                ...N
                            ],
                            'rangeFilters': [{
                                    'key': 'hoursPerWeek',
                                    'range': {
                                        'minimum': 0x0,
                                        'maximum': 0x50
                                    }
                                }],
                            'orFilters': [],
                            'dateFilters': [{
                                    'key': 'firstDayOnSite',
                                    'range': { 'startDate': O }
                                }],
                            'sorters': [],
                            'pageSize': 0x64,
                            'geoQueryClause': {
                                'lat': l,
                                'lng': m,
                                'unit': 'km',
                                'distance': parseInt(n) || 0x5
                            },
                            'consolidateSchedule': !![]
                        }
                    },
                    'query': 'query\x20searchJobCardsByLocation($searchJobRequest:\x20SearchJobRequest!)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20searchJobCardsByLocation(searchJobRequest:\x20$searchJobRequest)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20nextToken\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20jobCards\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20jobId\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20jobTitle\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20city\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20distance\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}'
                }, R = await fetch('https://e5mquma77feepi2bdn4d6h3mpu.appsync-api.us-east-1.amazonaws.com/graphql', {
                    'method': 'POST',
                    'headers': {
                        'accept': '*/*',
                        'accept-language': 'en-US,en;q=0.7',
                        'authorization': 'Bearer\x20<TOKEN>',
                        'content-type': 'application/json',
                        'country': P['country'],
                        'iscanary': 'false',
                        'priority': 'u=1,\x20i',
                        'sec-ch-ua': '\x22Brave\x22;v=\x22129\x22,\x20\x22Not=A?Brand\x22;v=\x228\x22,\x20\x22Chromium\x22;v=\x22129\x22',
                        'sec-ch-ua-mobile': '?0',
                        'sec-ch-ua-platform': '\x22macOS\x22',
                        'sec-fetch-dest': 'empty',
                        'sec-fetch-mode': 'cors',
                        'sec-fetch-site': 'cross-site',
                        'sec-gpc': '1'
                    },
                    'body': JSON['stringify'](Q)
                }), S = await R['json'](), T = S['data']['searchJobCardsByLocation']['jobCards'];
            if (T && T['length'] > 0x0)
                Swal['fire']({
                    'toast': !![],
                    'position': 'bottom-start',
                    'timer': c,
                    'showConfirmButton': ![],
                    'timerProgressBar': !![],
                    'html': '<span\x20style=\x22color:\x20green;\x22>Found\x20a\x20Job,\x20now\x20we\x20will\x20match\x20city</span>'
                }), L(), T['forEach'](U => {
                }), F(T);
            else {
            }
        } catch (U) {
            console['error']('Error\x20fetching\x20job\x20listings:', U);
        }
    }
    async function D() {
        if (!j) {
            const N = y(i);
            window['location']['href'] = 'https://' + N['domain'] + '/app#/contactInformation', await f();
            const O = document['querySelector']('input[data-test-id=\x22input-test-id-emailId\x22]');
            if (O && O['value']) {
                const P = O['value'];
                chrome['storage']['local']['set']({ 'candidateID': P }, function () {
                    const Q = y(i);
                    window['location']['href'] = 'https://' + Q['domain'] + '/app#/jobSearch';
                });
            }
        } else {
        }
    }
    function E() {
        const N = window['location']['href'], O = N['includes']('/app#/jobSearch');
        return O;
    }
    async function F(N) {
        const O = await chrome['storage']['local']['get']([
                'cityTags',
                '__cr',
                '__isProUser'
            ]), P = O['cityTags'] || [];
        let Q = O['__cr'] || 0x0;
        const R = O['__isProUser'] || ![];
        if (P['length'] === 0x0)
            return;
        const S = P['map'](U => U['toLowerCase']()['replace'](/[^a-zA-Z]/g, ''));
        let T = null;
        for (const U of N) {
            if (!U['city']) {
                const V = await chrome['storage']['local']['get'](['cityTags']), W = V['cityTags'] || [], X = W['map'](Y => Y['toLowerCase']()['replace'](/[^a-zA-Z]/g, ''));
                S['push'](...X);
            }
            if (U['city']) {
                const Y = U['city']['toLowerCase']()['replace'](/[^a-zA-Z]/g, '');
                if (S['some'](Z => Y['includes'](Z))) {
                    chrome['runtime']['sendMessage']({ 'action': 'playSound' });
                    try {
                        const Z = new Audio(chrome['runtime']['getURL']('alert.wav'));
                        Z['volume'] = 0x1, Z['play']()['catch'](a0 => console['log']('Direct\x20play\x20failed,\x20background\x20handler\x20will\x20take\x20over'));
                    } catch (a0) {
                    }
                    Swal['fire']({
                        'title': 'Job\x20Found!',
                        'text': 'Matching\x20job\x20found\x20in\x20' + U['city'],
                        'icon': 'success',
                        'timer': 0x2710,
                        'timerProgressBar': !![],
                        'toast': !![],
                        'position': 'top-end',
                        'showConfirmButton': ![]
                    }), T = U;
                    break;
                }
            }
        }
        if (T) {
            const a1 = y(i), a2 = 'https://' + a1['domain'] + '/app#/jobDetail?jobId=' + T['jobId'] + '&locale=' + a1['locale'];
            !R && (Q = Math['max'](--Q, 0x0), chrome['storage']['local']['set']({ '__cr': Q })), window['location']['href'] = a2, G();
        } else
            !b && (b = setInterval(() => {
                p ? C() : (clearInterval(b), b = null);
            }, c));
    }
    function G() {
        const N = new MutationObserver((P, Q) => {
            const R = document['querySelectorAll']('button[data-test-id=\x22ScheduleCardSelectScheduleLink\x22]');
            if (R['length'] > 0x0) {
                const T = Math['floor'](Math['random']() * R['length']), U = R[T];
                U['click'](), Q['disconnect']();
                return;
            }
            const S = document['querySelector']('button[data-test-id=\x22jobDetailSelectScheduleButton\x22]');
            if (S) {
                S['click'](), Q['disconnect'](), setTimeout(() => G(), 0x64);
                return;
            }
        });
        N['observe'](document['body'], {
            'childList': !![],
            'subtree': !![]
        });
        const O = document['querySelectorAll']('button[data-test-id=\x22ScheduleCardSelectScheduleLink\x22]');
        if (O['length'] > 0x0) {
            const P = Math['floor'](Math['random']() * O['length']);
            O[P]['click'](), N['disconnect']();
            return;
        }
        setTimeout(() => {
            N['disconnect']();
            const Q = document['querySelector']('div[data-test-component=\x22StencilText\x22]\x20em');
            Q && (Q['click'](), setTimeout(() => H(), 0x64));
        }, 0x1388);
    }
    function H() {
        const N = new MutationObserver((P, Q) => {
            const R = document['querySelectorAll']('.scheduleCardLabelText');
            if (R['length'] > 0x0) {
                const S = Math['floor'](Math['random']() * R['length']), T = R[S];
                T['click'](), Q['disconnect'](), I();
            }
        });
        N['observe'](document['body'], {
            'childList': !![],
            'subtree': !![]
        });
        const O = document['querySelectorAll']('.scheduleCardLabelText');
        if (O['length'] > 0x0) {
            const P = Math['floor'](Math['random']() * O['length']);
            O[P]['click'](), N['disconnect'](), I();
        }
    }
    function I() {
        const N = new MutationObserver((P, Q) => {
            const R = document['querySelector']('button[data-test-id=\x22jobDetailApplyButtonDesktop\x22]');
            R && (R['click'](), Q['disconnect']());
        });
        N['observe'](document['body'], {
            'childList': !![],
            'subtree': !![]
        });
        const O = document['querySelector']('button[data-test-id=\x22jobDetailApplyButtonDesktop\x22]');
        O && (O['click'](), N['disconnect']());
    }
    function J(N) {
        return new Promise((O, P) => {
            chrome['storage']['local']['get'](N, Q => {
                chrome['runtime']['lastError'] ? P(chrome['runtime']['lastError']) : O(Q);
            });
        });
    }
    async function K() {
        if (!b) {
            if (!g) {
                const N = y(i);
                window['location']['href'] = 'https://auth.' + N['domain'] + '/#/login';
                return;
            }
            if (g) {
                const O = y(i);
                window['location']['href'] = 'https://' + O['domain'] + '/app#/contactInformation', await f();
                let P = null;
                const Q = document['querySelector']('input[data-test-id=\x22input-test-id-emailId\x22]');
                Q && Q['value'] && (P = Q['value'], window['location']['href'] = 'https://' + O['domain'] + '/app#/jobSearch');
                if (p) {
                    await fetch('https://amazonjobsschedulert.azurewebsites.net/get-config?email=' + encodeURIComponent(P) + '&version=' + $version)['then'](async R => {
                        if (!R['ok']) {
                            const S = await R['json']();
                            throw new Error(S['message']);
                        }
                        return await R['json']();
                    })['then'](async R => {
                        await chrome['storage']['local']['set']({
                            '__cr': R['__cr'],
                            '__isProUser': R['__isProUser']
                        });
                        const S = await new Promise(T => {
                            chrome['storage']['local']['get']([
                                '__cr',
                                '__isProUser'
                            ], U => {
                                T(U);
                            });
                        });
                        $credits = S['__cr'], $isProUser = S['__isProUser'], A();
                    })['catch'](R => {
                        return Swal['fire']({
                            'title': 'Attention\x20please.',
                            'html': R['message'],
                            'allowEscapeKey': ![],
                            'allowEnterKey': ![],
                            'allowOutsideClick': ![],
                            'icon': 'warning'
                        })['then'](S => location['href'] = 'https://alertmeasap.com/contact');
                    });
                    if ((!$credits || $credits <= 0x0) && !$isProUser)
                        return chrome['storage']['local']['set']({ '__cr': Math['max'](--$credits, 0x0) }), Swal['fire']({
                            'title': 'Support\x20the\x20Developer',
                            'html': 'You\x27re\x20out\x20of\x20credits.<br>\x20Please\x20buy\x20unlimited\x20credits\x20for\x20just\x20<b>$15</b>',
                            'icon': 'warning',
                            'showDenyButton': r == 0x0,
                            'confirmButtonText': r == 0x0 ? 'Contact\x20Developer' : 'Buy\x20Unlimited\x20Credits',
                            'confirmButtonColor': r == 0x0 ? '#3F458E' : '#357856',
                            'denyButtonText': 'Buy\x20Unlimited\x20Credits',
                            'denyButtonColor': '#357856',
                            'allowEscapeKey': ![],
                            'allowEnterKey': ![],
                            'allowOutsideClick': ![]
                        })['then'](async R => {
                            return window['open'](R['isDenied'] || r != 0x0 ? 'https://donate.stripe.com/28o8ABesCaefbao3cg' : 'mailto:' + s);
                        });
                }
                if (p)
                    !b && (b = setInterval(() => {
                        p ? C() : (clearInterval(b), b = null);
                    }, c));
                else {
                }
            } else {
            }
        }
    }
    function L() {
        b && (clearInterval(b), b = null);
    }
    chrome['runtime']['onMessage']['addListener'](function (N, O, P) {
        if (N['action'] == 'activate') {
            p = N['status'];
            if (p)
                B();
        }
        P(!![]);
    });
    const M = chrome['runtime']['connect']({ 'name': 'amazon-shifts-extension' });
    M['onMessage']['addListener'](async function (N) {
        if (N['action'] == 'fetch_info') {
            g = N['data']['$username'], h = N['data']['$password'], j = N['data']['$candidateID'], k = N['data']['$selectedCity'], l = N['data']['$lat'], m = N['data']['$lng'], n = N['data']['$distance'], o = N['data']['$jobType'], p = N['data']['$active'], $version = N['data']['$version'];
            if (p) {
                B();
                return;
            }
        }
    }), M['postMessage']({ 'action': 'fetch_info' });
}(location['pathname']));