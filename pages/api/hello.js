// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { get } from "lodash";

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe', query: get(req, 'query.page', 'noValue') })
}
