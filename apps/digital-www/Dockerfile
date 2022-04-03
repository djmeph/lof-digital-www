FROM node:16-alpine
ARG port=8080
WORKDIR /app
ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --chown=nextjs:nodejs dist/apps/digital-www/ .
RUN yarn install

USER nextjs

EXPOSE ${port}
ENV PORT ${port}

CMD ["yarn", "start"]
