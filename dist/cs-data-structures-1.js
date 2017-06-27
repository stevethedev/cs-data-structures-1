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
     * Open a message-box to tell the user that we have
     * an empty array
     */
    function zeroLength()
    {
        var array = [];
        alert('array.length: ' + array.length);
    }

    /**
     * Open a message-box to tell the user that we have
     * an array with 1001 indexes
     */
    function thousandLength()
    {
        var array = [];
        array[1000] = true;
        alert('array.length: ' + array.length);
    }

    /**
     * Open a message-box to tell the user that we can
     * access any element in an array really quickly
     */
    function accessSpeed()
    {
        var array = [];
        var startTimer = window.performance.now();
        array[42] = 'the meaning of life';
        var endTimer = window.performance.now();
        alert('duration: ' + (endTimer - startTimer) + 'ms');
    }

    /**
     * Global object for the tutorial
     * @type {Object}
     */
    window.array = {
        'zeroLength': zeroLength,
        'thousandLength': thousandLength,
        'accessSpeed': accessSpeed,
    };

    /**
     * Shim window.performance.now() if it doesn't exist.
     */
    if ('undefined' === typeof window.performance) {
        window.performance = {
            'now': function() {
                return +(new Date());
            },
        };
    }
})(this);

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
     * Open a message-box to tell the user that the
     * linked list has a head node
     */
    function firstNode()
    {
        var chain = new LinkedList(1000);
        alert('typeof chain.head: ' + typeof chain.head);
    }

    /**
     * Open a message-box to tell the user that the
     * linked list has slow random-access speeds
     */
    function randomAccess()
    {
        var chain = new LinkedList(1000);
        var startTimer = window.performance.now();
        chain.get(1000);
        var endTimer = window.performance.now();
        alert('random access: ' + (endTimer - startTimer) + 'ms');
    }

    /**
     * Open a message-box to tell the user that we can access
     * any element in a dictionary really quickly
     */
    function accessSpeed()
    {
        var chain = new LinkedList(1000);
        var startTimer = window.performance.now();
        chain.pop();
        var endTimer = window.performance.now();
        alert('popped stack: ' + (endTimer - startTimer) + 'ms');
    }

    /**
     * Global object for the tutorial
     * @type {Object}
     */
    window.chain = {
        'firstNode': firstNode,
        'randomAccess': randomAccess,
        'accessSpeed': accessSpeed,
    };

    /**
     * Shim window.performance.now() if it doesn't exist.
     */
    if ('undefined' === typeof window.performance) {
        window.performance = {
            'now': function() {
                return +(new Date());
            },
        };
    }
})(this);

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
     * Open a message-box to tell the user that a
     * dictionary has no length attribute
     */
    function undefinedLength()
    {
        var dictionary = {};
        alert('typeof dictionary.length: ' + typeof dictionary.length);
    }

    /**
     * Open a message-box to tell the user that
     * this dictionary has only one key
     */
    function countKeys()
    {
        var dictionary = {};
        dictionary['string key'] = true;
        alert('number of keys: ' + Object.keys(dictionary).length);
    }

    /**
     * Open a message-box to tell the user that we can access
     * any element in a dictionary really quickly
     */
    function accessSpeed()
    {
        var dictionary = {};
        var startTimer = window.performance.now();
        dictionary['fourty-two'] = 'the answer to life, the universe, and everything';
        var endTimer = window.performance.now();
        alert('duration: ' + (endTimer - startTimer) + 'ms');
    }

    /**
     * Global object for the tutorial
     * @type {Object}
     */
    window.dictionary = {
        'undefinedLength': undefinedLength,
        'countKeys': countKeys,
        'accessSpeed': accessSpeed,
    };

    /**
     * Shim window.performance.now() if it doesn't exist.
     */
    if ('undefined' === typeof window.performance) {
        window.performance = {
            'now': function() {
                return +(new Date());
            },
        };
    }
})(this);

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
