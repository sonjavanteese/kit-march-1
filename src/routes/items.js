import * as db from '$lib/db';

/** @type {import('./items').RequestHandler} */
export async function get() {
  const items = await db.list();
 
  return {
    body: { items }
  };
}


/** @type {import('./items').RequestHandler} */
export async function post({ request }) {
  const [errors, item] = await db.create(request);
 
  if (errors) {
    // return validation errors
    return {
      status: 400,
      body: { errors }
    };
  }
 
  // redirect to the newly created item
  return {
    status: 303,
    headers: {
      location: `/items/${item.id}`
    }
  };
}