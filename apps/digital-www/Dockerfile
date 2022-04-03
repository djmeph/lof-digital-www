# Environment
FROM node:16-alpine
ARG port=8080
WORKDIR /app
ENV NODE_ENV production

# Node Dependencies
COPY dist/apps/digital-www/package.json .
RUN yarn install

# Copy production build
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
COPY --chown=nextjs:nodejs dist/apps/digital-www/ .

# Entry point
USER nextjs
EXPOSE ${port}
ENV PORT ${port}
CMD ["yarn", "start"]
