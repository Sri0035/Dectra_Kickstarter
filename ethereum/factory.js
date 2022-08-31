import web3 from './web3';
import campaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(campaignFactory.interface),
    '0xdc1259Fb60b420F23f66c4a46970B5F15CcF8908'
);

export default instance;