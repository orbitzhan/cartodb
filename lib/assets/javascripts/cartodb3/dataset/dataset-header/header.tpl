<div class="Editor-HeaderInfo-inner">
  <div class="Editor-HeaderInfo-title u-bSpace--m u-flex u-alignCenter">
    <% if (isSync && isOwner) { %>
      <span class="SyncInfo-state SyncInfo-state--<%- syncState %> u-rSpace--m js-syncState"></span>
    <% } %>
    <div class="Editor-HeaderInfo-titleText js-name">
      <h2 class="u-ellipsis CDB-Text CDB-Size-huge is-light"><%- title %></h2>
    </div>
    <% if (isCustomQueryApplied) { %>
      <span class="CDB-Tag CDB-Tag--opaque CDB-Text CDB-Size-small u-secondaryTextColor"><%- _t('dataset.sql') %></span>
    <% } %>
    <button class="CDB-Shape u-lSpace js-options">
      <div class="CDB-Shape-threePoints is-blue is-small">
        <div class="CDB-Shape-threePointsItem"></div>
        <div class="CDB-Shape-threePointsItem"></div>
        <div class="CDB-Shape-threePointsItem"></div>
      </div>
    </button>
  </div>
  <div class="u-bSpace--xl u-flex u-alignCenter">
    <div class="js-privacyDropdown u-rSpace--m">
      <<%- privacyDOMElement %> class="u-actionTextColor <% if (isOwner) { %>js-privacy<% } %>">
        <i class="Tag Tag--big Tag--outline <%- cssClass %> CDB-Text CDB-Size-small u-upperCase"><%- privacy %></i>
      </<%- privacyDOMElement %>>
    </div>
    <% if (isOwner) { %>
      <% if (!isSimple) { %>
      <div class="js-share-users"></div>
      <% } %>
    <% } %>
    <span class="CDB-Text CDB-Size-medium u-altTextColor"><%- _t('dataset.updated', { ago: ago }) %></span>
  </div>
</div>
