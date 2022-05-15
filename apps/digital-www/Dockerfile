FROM public.ecr.aws/docker/library/node:16-bullseye as dependencies
WORKDIR /src
COPY package.json .
RUN yarn install

FROM public.ecr.aws/docker/library/node:16-bullseye as runner
ARG port=3000
WORKDIR /src
ENV PORT ${port}
ENV NODE_ENV production
RUN groupadd --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
COPY --chown=nextjs:nodejs next.config.js ./
COPY --chown=nextjs:nodejs public ./public
COPY --chown=nextjs:nodejs .next ./.next
COPY --chown=nextjs:nodejs package.json ./package.json
COPY --chown=nextjs:nodejs --from=dependencies /src/node_modules ./node_modules
EXPOSE ${port}
CMD ["yarn", "start", "-p", "$PORT"]
