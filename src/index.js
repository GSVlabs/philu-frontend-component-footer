/* eslint-disable import/no-named-default, import/no-unresolved */
import { default as brandMessages } from '@edx/brand/i18n';
import StudioFooter from './components/studio-footer';

import Footer from './components/Footer';
import { default as footerMessages } from './i18n/index';

const messages = { ...footerMessages, ...brandMessages };

export default Footer;
export { messages, StudioFooter };
