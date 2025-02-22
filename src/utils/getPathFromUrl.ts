function getPathFromUrl(url: string): string {
  try {
    const parsedUrl = new URL(url);
    const pathSegments = parsedUrl.pathname.split("/").filter(Boolean);

    if (pathSegments.length === 0) {
      return "#";
    }

    const lastSegment = pathSegments[pathSegments.length - 1];
    return `/${lastSegment}`;
  } catch (error) {
    console.error(error);
    return "#";
  }
}

export default getPathFromUrl;
