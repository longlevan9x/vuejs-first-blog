const LoadScript = {
  loadScript: function(src) {
    var plugin = document.createElement("script");
    plugin.setAttribute("src", src);
    plugin.async = false;
    document.head.appendChild(plugin);
  },
  loadScriptBody: function(src) {
    var plugin = document.createElement("script");
    plugin.setAttribute("src", src);
    plugin.async = false;
    document.body.appendChild(plugin);
  }
};

export default LoadScript;
