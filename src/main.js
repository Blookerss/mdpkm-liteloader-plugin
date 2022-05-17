import LiteLoader from './liteloader';
LocalStrings.setContent({
    en: {
        'app.mdpkm.common.loaders.liteloader': 'LiteLoader',
        'app.mpdkm.common.loaders.liteloader.summary': 'LiteLoader is a lightweight mod loader designed to provide simple,\nhigh-performance and reliable loader functionality.'
    }
});

await API.add('LiteLoader', new LiteLoader());