/*
-) Performance of Map vs. Plain Object:
    -) Map: Optimized for key-value storage and retrieval.
            Keys can be any type, including objects, and Map maintains the order of insertion.
            Internally, Map uses hash tables, which are highly efficient for frequent inserts and lookups.
    -) Plain Object ({}): Not specifically optimized for key-value storage and retrieval.
            Although objects are commonly used as key-value stores, they come with additional overhead, such as prototype
            chain traversal and property enumeration.
    For example:
        When you use a plain object, JavaScript engines may need to check if a key is part of the object itself or inherited
        from its prototype chain (unless you explicitly use Object.create(null) to create a "dictionary").
        In contrast, Map avoids such overhead since it is explicitly designed for storing key-value pairs.

-) Order and Conflict Management:
    -) Map guarantees consistent behavior without worrying about potential key conflicts with object properties (__proto__, etc.).
        Even though this isn’t directly relevant in your case (because you're using numbers as keys), Map handles these edge cases more efficiently.
-) Hashed Keys in Map:
    -) Map uses hashed keys internally, making lookups slightly faster compared to plain objects, where keys are first converted to strings (even for numbers) before being stored.
-) Iteration Efficiency:
    -) If Map and objects were used identically, the difference would typically be negligible. However, if the implementation internally optimizes insertion and lookup patterns
       (as modern JS engines do for Map), it can result in faster performance.
*/