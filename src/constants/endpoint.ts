const API_KEY = 'f81ff335df25efa4e0ba5fe3f2f415a3';

export const API_ROOT = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}`;

export const params = {
    format: 'json',
    nojsoncallback: 1,
    text: 'cartoons',
    safe_search: 1,
    extras: 'description, owner_name, tags, url_q',
    page: 1,
    per_page: 40
};
