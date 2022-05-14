import LiteLoader from './liteloader';
LocalStrings.setContent({
    en: {
        'app.mdpkm.common.loaders.liteloader': 'LiteLoader'
    }
});

await API.add('LiteLoader', new LiteLoader());