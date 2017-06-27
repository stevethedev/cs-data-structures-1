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
