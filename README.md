# Soleil Nail Lounge

A simple React and Vite project showcasing a nail salon website. The project uses Tailwind CSS for styling. You can view a screenshot of the homepage [here](src/assets/gallery/nails-bg.jpg).

## Usage

```bash
npm install
```
Install all dependencies.

```bash
npm run dev
```
Start the development server with Vite.

```bash
npm run build
```
Generate a production build.

## Deployment

Pushes to the `main` branch trigger a GitHub Actions workflow that builds the
project and deploys it to an EC2 instance. To enable deployments, create the
following repository secrets:

- `EC2_HOST` &ndash; the public IP or hostname of your EC2 server
- `EC2_USER` &ndash; SSH user for connecting to the server
- `EC2_SSH_KEY` &ndash; private SSH key for the user above
- `EC2_TARGET_DIR` &ndash; destination path for the deployed files

The workflow uploads the contents of the `dist` folder and then restarts
`nginx`. Adjust `.github/workflows/deploy.yml` if your deployment setup differs.
