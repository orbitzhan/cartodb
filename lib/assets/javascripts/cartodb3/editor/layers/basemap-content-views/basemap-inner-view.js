var CoreView = require('backbone/core-view');
var BasemapCategoriesView = require('./basemap-categories-view');
var BasemapSelectView = require('./basemap-select-view');
var template = require('./basemap-inner.tpl');

module.exports = CoreView.extend({

  className: 'Editor-inner',

  initialize: function (opts) {
    if (!opts.categoriesCollection) throw new Error('categoriesCollection is required');
    if (!opts.layerDefinitionsCollection) throw new Error('layerDefinitionsCollection is required');
    if (!opts.selectedCategoryVal) throw new Error('selectedCategoryVal is required');
    if (!opts.basemapsCollection) throw new Error('basemapsCollection is required');

    this._categoriesCollection = opts.categoriesCollection;
    this._layerDefinitionsCollection = opts.layerDefinitionsCollection;
    this._selectedCategoryVal = opts.selectedCategoryVal;
    this._basemapsCollection = opts.basemapsCollection;

    this._initBinds();
  },

  _initBinds: function () {
    this.model.bind('change:disabled', function () {
      this.$el.toggleClass('is-disabled', this.model.get('disabled'));
      this._renderSelect();
    }, this);
  },

  render: function () {
    this.clearSubViews();
    this.$el.html(template());

    this._initViews();
    return this;
  },

  _initViews: function () {
    this._renderCategories();
    this._renderSelect();
  },

  _renderCategories: function () {
    if (this._categoriesView) {
      this.removeView(this._categoriesView);
      this._categoriesView.clean();
    }

    this._categoriesView = new BasemapCategoriesView({
      categoriesCollection: this._categoriesCollection
    });

    this.addView(this._categoriesView);
    this.$('.js-basemapCategory').html(this._categoriesView.render().el);
  },

  _renderSelect: function () {
    if (this._selectView) {
      this.removeView(this._selectView);
      this._selectView.clean();
    }

    this._selectView = new BasemapSelectView({
      layerDefinitionsCollection: this._layerDefinitionsCollection,
      basemapsCollection: this._basemapsCollection,
      selectedCategoryVal: this._selectedCategoryVal,
      disabled: this.model.get('disabled')
    });
    this.addView(this._selectView);
    this.$('.js-basemapSelect').html(this._selectView.render().el);
  }

});