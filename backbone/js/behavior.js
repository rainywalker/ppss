/**
 * Created by jaelomin on 2015. 12. 7..
 *
 */


console.log("d")

(function(){
    /**
     *
     * @type {any}
     */
    var Ride = Backbone.Model.extend({
        defaults : {
            coverImage : "img/tmp_img.jpg",
            title : "2001년 대관령 대회",
            rider : "Jaelomin",
            ridingDate : "2015",
            keywords : "대관령 힐크라이밍 대회"
        }
    });

    /**
     *
     * @type {any}
     */
    var RideView = Backbone.View.extend({
        tagName : "div",
        className : "rideContainer",
        template : $("#rideTemplate").html(),

        render : function() {
            var tmpl = _.template(this.template);
            this.$el.html(tmpl(this.model.toJSON()));
            return this
        },
        events : {
            "click .delete" : "deleteRide"
        },
        deleteRide : function() {
            this.model.destroy();
            this.remove()
        }
    });

    /**
     *
     * @type {Ride}
     */


    var rides = [{title:"대관련 힐크라이밍 대회", rider : "Jae-Min", ridingDate: "1982", keywords: "그럭저럭"},
        {title:"동수원 힐크라이밍 대회", rider : "JU-WON", ridingDate: "2011", keywords: "축복"},
        {title:"북수원 힐크라이밍 대회", rider : "Jang-WON", ridingDate: "2014", keywords: "축복"}];

    var Rides = Backbone.Collection.extend({
        model : Ride
    });

    var RidesView = Backbone.View.extend({
        el : $("#rides"),
        initialize : function() {
            this.collection = new Rides(rides);
            this.render();
            this.collection.on("add", this.renderRide, this)
            this.collection.on("remove", this.removeRide, this)
        },
        render : function() {
            var that = this;
            _.each(this.collection.models,function(item){
                that.renderRide(item)
            },this)
        },
        renderRide : function(item) {
            var rideView = new RideView({
                model : item
            });
            this.$el.append(rideView.render().el);
        },
        addRide : function(e) {
            e.preventDefault();
            var formData = {};p
            $("#addRide").children("input").each(function(i, el){
                if ($(el).val() !== "") {
                    formData[el.id] = $(el).val();
                }
            });
            this.collection.add(new Ride(formData))
        },
        removeRide : function(removedRide) {
            var removedRideData = removedRide.attributes;

            _.each(removedRideData, function(val, key){
                if (removedRideData[key] === removedRide.defaults[key]) {
                    console.log(">>1 " + removedRideData[key]);
                    delete removedRideData[key]

                }
            });
            _.each(rides, function(ride){
                if (_.isEqual(ride, removedRideData)) {
                    console.log(">>2 :" + ride);
                    rides.splice(_.indexOf(rides, ride),1);
                }
            });
        },
        events : {
            "click #add" : "addRide"
        }
    });
    var ridesView = new RidesView();
})();


