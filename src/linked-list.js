/**
 * MIT License
 *
 * Copyright (c) 2017 Steven Jimenez
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
(function(window) {
    /**
     * Naive linked-list implementation in JavaScript
     * @param       {integer=} length length of the list to create
     * @constructor
     */
    function LinkedList(length)
    {
        this.head = null;

        if (0 === arguments.length) {
            length = 0;
        }

        for (var i = 0; i < length; ++i) {
            this.push(null);
        }
    }

    LinkedList.prototype = {
        push: function(value) {
            var head = this.head;
            this.head = new Node(value, head);
            return this;
        },

        pop: function() {
            var head = this.head;
            this.head = head.next;
            return head;
        },

        get: function(index) {
            var element = this.head;
            for(var i = 0; i < index; ++i) {
                if (!element.next) {
                    return null;
                }
                element = element.next;
            }
            return element;
        },
    };

    /**
     * Naive linked-list node implementation in JavaScript
     * @param       {*} value value for the list to hold
     * @constructor
     */
    function Node(value, next)
    {
        switch (arguments.length) {
            case 0: value = null;
            case 1: next = null;
        }
        this.value = value;
        this.next = next;
    }

    window.LinkedList = LinkedList;
})(this);
