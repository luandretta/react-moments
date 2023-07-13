import { rest } from "msw";

const baseURL = 'https://django-rest-framework-andretta-f415d1e4c8be.herokuapp.com/';

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 5,
        username: "Lisa",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 5,
        profile_image: "https://res.cloudinary.com/dtqse76ok/image/upload/v1/media/images/rosie_ocenj3"
        }
        )
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  })
];