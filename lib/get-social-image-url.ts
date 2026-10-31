// static export has no /api/social-image route, so pages fall back to
// the Notion cover / default og image
export function getSocialImageUrl(_pageId: string | undefined) {
  return null
}
