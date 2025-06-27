# 🚂 BrainBrawler Frontend - Railway.app Optimized
FROM nginx:alpine

# Install curl for health checks
RUN apk add --no-cache curl

# Copy static files first
COPY . /usr/share/nginx/html

# Copy startup script for Railway dynamic port
COPY start.sh /start.sh
RUN chmod +x /start.sh

# Create necessary directories with proper permissions
RUN mkdir -p /var/cache/nginx /var/log/nginx /var/run/nginx /tmp/nginx

# Create non-root user for security
RUN addgroup -g 1001 -S nginx-group && \
    adduser -S nginx-user -u 1001 -G nginx-group

# Set proper ownership for all nginx directories
RUN chown -R nginx-user:nginx-group /usr/share/nginx/html && \
    chown -R nginx-user:nginx-group /var/cache/nginx && \
    chown -R nginx-user:nginx-group /var/log/nginx && \
    chown -R nginx-user:nginx-group /var/run/nginx && \
    chown -R nginx-user:nginx-group /tmp/nginx && \
    chown -R nginx-user:nginx-group /etc/nginx/conf.d && \
    chown nginx-user:nginx-group /start.sh

# Switch to non-root user
USER nginx-user

# Expose port (Railway auto-assigns $PORT)
EXPOSE 80

# Health check optimized for Railway dynamic port
HEALTHCHECK --interval=30s --timeout=10s --start-period=10s --retries=3 \
  CMD curl -f http://localhost:${PORT:-80}/health || exit 1

# Start with Railway-compatible script
CMD ["/start.sh"]
