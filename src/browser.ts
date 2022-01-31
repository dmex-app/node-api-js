/**
 * This file is the entrypoint of browser builds.
 * The code executes when loaded in a browser.
 */
import {DmexClient, DmexApi} from './main';

declare global {
	interface Window {
		DmexApi: typeof DmexApi,
		DmexClient: typeof DmexClient
	}
}

window.DmexApi = DmexApi;
window.DmexClient = DmexClient;
