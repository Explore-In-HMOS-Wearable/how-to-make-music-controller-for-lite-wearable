import router from '@ohos.router';
import { getPlaylist } from '../../utils/utils';

let content;
export default {
    data: {
        playlist: []
    },
    onInit() {
        if (this.playlist.length === 0) {
            router.replace({
                uri: 'pages/phoneNotConnected/phoneNotConnected'
            });
            return;
        }
        content = getPlaylist('internal://app/playlist.json')
        this.playlist = JSON.parse(content);
    },

    controlMusic(musicInfo) {
        router.replace({
            uri: 'pages/player/player',
            params: {
                musicInfo: musicInfo
            }
        });
    },

    handleBack() {
        router.replace({
            uri: 'pages/index/index'
        });
    },
}
