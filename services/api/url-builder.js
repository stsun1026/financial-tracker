const UrlBuilder = function() {
  const SLASH = '/';

  this.build = (...urlComponents) => {
    return urlComponents.join(SLASH);  
  }
}

const urlBuilder = new UrlBuilder();

export default urlBuilder;
