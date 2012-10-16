/*
 * Copyright 2012 Jasha Joachimsthal
 *
 * Licensed under the Apache License, Version 2.0 (the  "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var app = {
    // Application Constructor
    initialize:function () {
    },
    fetchProducts:function () {
        var loc = 'http://www.demo.onehippo.com/restapi/topproducts?_type=json&sortby=hippogogreen%3Arating&sortdir=descending&max=10';
        if (window.widget && typeof window.widget.proxify == 'function') {
            loc = widget.proxify(loc);
        }
        var prods = $.getJSON(loc, function (data) {
            var items = [];
            var item, rating;
            $.each(data, function (index) {
                item = data[index];
                rating = item.rating >= 0 && item.rating <= 5 ? item.rating : 0;
                items.push('<li>' + '<img src="' + item.smallThumbnail + '" alt="" class="productimage">' + '<a href="#" class="productname" onclick="app.showProductDetails(this, \'' + item.productLink + '\');return false;">' + item.links[0].title + '</a>' + '<span class="price"> &euro; ' + item.price + '</span>' + ' <span class="rating" style="background-position: left -' + (Math.round(rating * 10) * 20 + 3) + 'px;"> ' + rating + '</span>' + '</li>');
            });
            document.getElementById('products').innerHTML = '<ul>' + items.join('') + '</ul>';
        });
        prods.error(function () {
            alert('Could not load products');
        });

    },
    showProductDetails:function (elem, productLink) {
        var loc = productLink;
        if (window.widget && typeof window.widget.proxify == 'function') {
            loc = widget.proxify(loc);
        }
        var parentEl = elem.parentElement;
        if (parentEl.querySelector('.description')) {
            return;
        }
        var descr = $.getJSON(loc, function (data) {
            parentEl.innerHTML += '<div class="description">' + data.description + '</div>';
        });

        descr.error(function () {
            parentEl.innerHTML += '<div class="description">Could not fetch product details</div>'
        });
    }

};
