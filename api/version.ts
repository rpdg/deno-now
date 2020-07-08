import { Status } from 'https://deno.land/std/http/http_status.ts';
import { ServerRequest } from 'https://deno.land/std/http/server.ts';

export default async (req: ServerRequest) => {
	const buff: Uint8Array = await Deno.readAll(req.body);
	let headers = new Headers();
	headers.set('content-type', 'application/json');
	req.respond({
		status: Status.OK,
		headers,
		body: buff,
	});
};
