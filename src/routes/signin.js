import * as db from '$lib/db';

export async function post({ request }) {

  const fdata = await request.formData();
  
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