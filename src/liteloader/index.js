import Manifest from '../manifest';
import Manifests from './manifests';
import IconImage from '../assets/img/icons/liteloader.svg';
import BannerImage from '../assets/img/banners/liteloader.svg';
export default class LiteLoader extends PluginSystem {
    type = 'java-modded';
    constructor() {
        super(Manifest.id);
    }

    async init() {
        this.addLoader('liteloader', LocalStrings['app.mdpkm.common.loaders.liteloader'], {
            icon: IconImage,
            type: this.type,
            banner: BannerImage,
            description: LocalStrings['app.mdpkm.common.loaders.liteloader.summary']
        });
    }

    async getVersions() {
        const versions = Object.entries(Manifests);
        return [{
            name: "Stable",
            data: versions.filter(v => !v[1].libraries[0].name.endsWith('SNAPSHOT')).map(v => ({ name: v[1].libraries[0].name.split(':').reverse()[0], value: v[0] }))
        }, {
            name: "Snapshot",
            data: versions.filter(v => v[1].libraries[0].name.endsWith('SNAPSHOT')).map(v => ({ name: v[1].libraries[0].name.split(':').reverse()[0], value: v[0] }))
        }];
    }

    async downloadManifest(path, game) {
        await Util.writeFile(path, JSON.stringify(Manifests[game]));
    }
};