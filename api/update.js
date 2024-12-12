export default function handler(req, res) {
    if (req.method === 'POST') {
        const { description } = req.body;

        if (!description) {
            return res.status(400).json({ error: 'Description is required' });
        }

        // 更新処理をここに実装
        console.log('Updating description to:', description);

        res.status(200).json({ message: 'Description updated successfully!' });
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
