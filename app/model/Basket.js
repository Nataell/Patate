Ext.define('fr.ESIR.GreenVentory.model.Basket', {
    extend: 'Ext.data.Model',

        fields: [{name:'id_user'},{name:'name'},{name:'seller_id'},{name:'price'},{name:'quantity'},{name:'picture'},{name:'id_product'}],
		idField: 'productNo'
});
