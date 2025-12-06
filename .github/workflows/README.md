# GitHub Actions Workflows

## Keep Supabase Active

### Purpose
This workflow prevents your Supabase project from being automatically paused due to inactivity. Supabase free tier projects are paused after 7 days of inactivity.

### How it works
- Runs automatically every 6 days (before the 7-day inactivity threshold)
- Makes a simple REST API call to your Supabase project
- Can be manually triggered from the Actions tab if needed

### Setup Instructions

1. **Add Supabase credentials as GitHub Secrets** (Required):
   - Go to your repository Settings → Secrets and variables → Actions
   - Add the following secrets:
     - `VITE_SUPABASE_URL`: Your Supabase project URL (e.g., https://your-project.supabase.co)
     - `VITE_SUPABASE_ANON_KEY`: Your Supabase anonymous key
   
   These secrets are required for the workflow to function properly.

2. **Enable GitHub Actions**:
   - Ensure GitHub Actions are enabled in your repository settings
   - The workflow will run automatically on the defined schedule

3. **Manual Testing**:
   - Go to Actions tab in your GitHub repository
   - Select "Keep Supabase Active" workflow
   - Click "Run workflow" to test it manually

### Schedule
- **Cron schedule**: `0 3 */6 * *`
- **Frequency**: Every 6 days at 3:00 AM UTC
- **Purpose**: Runs before Supabase's 7-day inactivity timeout

### Monitoring
Check the Actions tab to see workflow runs and ensure they're completing successfully.

### Troubleshooting
If the workflow fails:
1. Check that your Supabase URL and API key are correct
2. Verify that your Supabase project is active
3. Check the workflow logs in the Actions tab for detailed error messages
